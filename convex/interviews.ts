import { mutation, query } from './_generated/server';
import { v } from 'convex/values';

export const getAllInterviews = query({
    handler: async (ctx) => {
        const userIdentity = await ctx.auth.getUserIdentity();
        if (!userIdentity) throw new Error('Unauthorized');

        const interviews = await ctx.db.query('interviews').collect();

        return interviews;
    },
});

export const getMyInterviews = query({
    handler: async (ctx) => {
        const userIdentity = await ctx.auth.getUserIdentity();
        if (!userIdentity) return [];

        const interviews = await ctx.db
            .query('interviews')
            .withIndex('by_candidate_id', (q) =>
                q.eq('candidateId', userIdentity.subject),
            )
            .collect();

        return interviews!;
    },
});

export const getInterviewByStreamCallId = query({
    args: { streamCallId: v.string() },
    handler: async (ctx, args) => {
        return await ctx.db
            .query('interviews')
            .withIndex('by_stream_call_id', (q) =>
                q.eq('streamCallId', args.streamCallId),
            )
            .first();
    },
});

export const createInterview = mutation({
    args: {
        title: v.string(),
        description: v.optional(v.string()),
        startTime: v.number(),
        status: v.string(),
        streamCallId: v.string(),
        candidateId: v.string(),
        interviewerIds: v.array(v.string()),
    },
    handler: async (ctx, args) => {
        const userIdentity = await ctx.auth.getUserIdentity();
        if (!userIdentity) throw new Error('Unauthorized');

        return await ctx.db.insert('interviews', {
            ...args,
        });
    },
});

export const updateInterviewStatus = mutation({
    args: {
        id: v.id('interviews'), // every document in a table is assigned a unique ID when it is created
        status: v.string(),
    },
    handler: async (ctx, args) => {
        return await ctx.db.patch(args.id, {
            status: args.status,
            ...(args.status === 'completed' ? { endTime: Date.now() } : {}),
        });
    },
});
