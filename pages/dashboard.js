import { useAuth } from '@/lib/auth';

import useSWR from 'swr';

import EmptyState from '@/components/EmptyState';

import SiteTableSkeleton from '../components/SiteTableSkeleton';
import DashboardShell from '../components/DashboardShell';
import fetcher from '@/utils/fetcher';
import SiteTable from '@/components/SiteTable';

const Dashboard = () => {
    const auth = useAuth();

    const { data } = useSWR('api/sites', fetcher);
    console.log('data:', data);

    if (!data) {
        return (
            <DashboardShell>
                <SiteTableSkeleton />
            </DashboardShell>
        );
    }
    return (
        <DashboardShell>
            {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
        </DashboardShell>
    );
};
export default Dashboard;
