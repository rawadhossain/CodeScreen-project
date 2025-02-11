import { v } from 'convex/values';
import { mutation, query } from './_generated/server';

export const syncUser = mutation({
    args: {
        name: v.string(),
        email: v.string(),
        clerkId: v.string(),
        image: v.optional(v.string()),
    },

    handler: async (ctx, args) => {
        const existingUser = await ctx.db
            .query('users')
            .filter((q) => q.eq(q.field('clerkId'), args.clerkId))
            .first();

        /*
        ctx.db.query('users'): Queries the users table in the Convex database.
        .filter((q) => q.eq(q.field('clerkId'), args.clerkId)): Filters the users table to find a user whose clerkId matches the clerkId passed in the arguments.

        q.field('clerkId'): Refers to the clerkId field in the users table.

        q.eq(...): Checks if the clerkId field is equal to the provided clerkId.

        .first(): Returns the first matching document (or null if no match is found).
        */

        if (existingUser) return;

        await ctx.db.insert('users', {
            ...args,
            role: 'candidate',
        });
    },
});

export const getUsers = query({
    handler: async (ctx) => {
        const identity = await ctx.auth.getUserIdentity();
        if (!identity) throw new Error('User is not authenticated');

        const users = await ctx.db.query('users').collect();

        return users;
    },
});

export const getUserByClerkId = query({
    args: { clerkId: v.string() },
    handler: async (ctx, args) => {
        const user = await ctx.db
            .query('users')
            .withIndex('by_clerk_id', (q) => q.eq('clerkId', args.clerkId))
            .first();

        return user;
    },
});
