import { useUser } from '@clerk/nextjs';
import { useQuery } from 'convex/react';
import { api } from '../../convex/_generated/api';

export const useUserRole = () => {
    const { user } = useUser(); //information about the currently authenticated user.

    const userData = useQuery(api.users.getUserByClerkId, {
        clerkId: user?.id || '',
    });

    const isLoading = userData === undefined;

    return {
        isLoading,
        isInterviewer: userData?.role === 'interviewer', //true if the user's role is 'interviewer', otherwise false
        isCandidate: userData?.role === 'candidate',
    };
};
