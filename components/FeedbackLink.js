import { Flex } from '@chakra-ui/react';

const FeedbackLink = ({ siteId }) => {
    return (
        <Flex justifyContent="space-between" mb={8} width="full" mt={1}>
            <Link fontWeight="bold" fontSize="sm" href={`/p/${siteId}`}>
                Leave a comment
            </Link>
            <Link href="/" fontSize="xs" color="blackAlpha.500">
                Powered by Fast Feedback
            </Link>
        </Flex>
    );
};

export default FeedbackLink;
