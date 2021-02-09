import { useAuth } from '@/lib/auth';

import useSWR from 'swr';

import EmptyState from '@/components/EmptyState';

import SiteTableSkeleton from '../components/SiteTableSkeleton';
import DashboardShell from '../components/DashboardShell';
import fetcher from '@/utils/fetcher';
import FeedbackTable from '@/components/FeedbackTable';
import FeedbackTableHeader from '@/components/FeedbackTableHeader';

const MyFeedback = () => {
    const { user } = useAuth();

    const { data } = useSWR(
        user ? ['api/feedback', user.token] : null,
        fetcher
    );
    console.log('data:', data);

    if (!data) {
        return (
            <DashboardShell>
                <FeedbackTableHeader />
                <SiteTableSkeleton />
            </DashboardShell>
        );
    }
    return (
        <DashboardShell>
            <FeedbackTableHeader />
            {data.feedback ? (
                <FeedbackTable allFeedback={data.feedback} />
            ) : (
                <EmptyState />
            )}
        </DashboardShell>
    );
};
export default MyFeedback;
