import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

// add comment
export const addComment = mutation({
    args: {
        interviewId: v.id('interviews'),
        content: v.string(),
        rating: v.number(),
    },
    handler: async (ctx, args) => {
        const userIdentity = await ctx.auth.getUserIdentity();
        if (!userIdentity) throw new Error('Unauthorized');

        return await ctx.db.insert('comments', {
            content: args.content,
            rating: args.rating,
            interviewId: args.interviewId,
            interviewerId: userIdentity.subject,
        });
    },
});

export const getComments = query({
    args: { interviewId: v.id('interviews') },
    handler: async (ctx, args) => {
        const comments = await ctx.db
            .query('comments')
            .withIndex('by_interview_id', (q) =>
                q.eq('interviewId', args.interviewId),
            )
            .collect();

        return comments;
    },
});
