import { useAuth } from '@/lib/auth';
import { LogoIcon } from '@/styles/customIcons';

import { Heading, Text, Code, Button, Flex } from '@chakra-ui/react';
import EmptyState from '@/components/EmptyState';

const Dashboard = () => {
    const auth = useAuth();

    if (!auth.user) {
        return 'Loading...';
    }
    return <EmptyState />;
};
export default Dashboard;
