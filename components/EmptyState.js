import { Heading, Flex, Text, Button } from '@chakra-ui/react';

import AddSiteModal from './AddSiteModal';

const EmptyState = () => (
    <Flex
        width="100%"
        backgroundColor="white"
        borderRadius="8px"
        p={16}
        justify="center"
        align="center"
        direction="column"
    >
        <Heading size="lg" as="h2" mb={2}>
            You haven't added any sites.
        </Heading>
        <Text mb={4}>Welcome 👋🏻 Let's get started.</Text>
        <AddSiteModa>Add Your First Site.</AddSiteModa>
    </Flex>
);

export default EmptyState;
