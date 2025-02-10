import { httpRouter } from 'convex/server';
import { httpAction } from './_generated/server';
import { WebhookEvent } from '@clerk/nextjs/server';
import { Webhook } from 'svix';
import { api } from './_generated/api';

const http = httpRouter();

http.route({
    path: '/clerk-webhook',
    method: 'POST',
    handler: httpAction(async (ctx, request) => {
        const webhookSecret = process.env.CLERK_WEBHOOK_SECRET;
        if (!webhookSecret) {
            throw new Error(
                'Missing CLERK_WEBHOOK_SECRET environment variable',
            );
        }

        //Extracting Webhook Headers
        const svix_id = request.headers.get('svix-id'); //Unique ID for this webhook event
        const svix_signature = request.headers.get('svix-signature');
        const svix_timestamp = request.headers.get('svix-timestamp');

        if (!svix_id || !svix_signature || !svix_timestamp) {
            return new Response('No svix headers found', {
                status: 400,
            });
        }

        // Parsing the Request Body
        const payload = await request.json(); // Extracts the JSON body from the incoming request.
        const body = JSON.stringify(payload);

        // Verifying the Webhook with Svix
        const wh = new Webhook(webhookSecret); // Creates a Webhook instance with the secret key
        let event: WebhookEvent;

        try {
            event = wh.verify(body, {
                'svix-id': svix_id,
                'svix-timestamp': svix_timestamp,
                'svix-signature': svix_signature,
            }) as WebhookEvent;
        } catch (err) {
            console.error('Error verifying webhook:', err);
            return new Response('Error occurred', { status: 400 });
        }

        //Handling Different Webhook Events
        const eventType = event.type;

        if (eventType === 'user.created') {
            const { id, email_addresses, first_name, last_name, image_url } =
                event.data;

            const email = email_addresses[0].email_address;
            const name = `${first_name || ''} ${last_name || ''}`.trim();

            try {
                //Runs a Convex mutation (syncUser) to store the user in the database.
                await ctx.runMutation(api.users.syncUser, {
                    clerkId: id,
                    email,
                    name,
                    image: image_url,
                });
            } catch (error) {
                console.log('Error creating user:', error);
                return new Response('Error creating user', { status: 500 });
            }
        }

        return new Response('Webhook processed successfully', { status: 200 });
    }),
});

export default http;
