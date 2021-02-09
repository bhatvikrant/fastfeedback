import {
    Flex,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading
} from '@chakra-ui/react';

const FeedbackTableHeader = () => {
    return (
        <>
            <Breadcrumb>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink color="gray.700" fontSize="sm">
                        Feedback
                    </BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Flex justifyContent="space-between">
                <Heading color="black" mb={4}>
                    My Feedback
                </Heading>
            </Flex>
        </>
    );
};

export default FeedbackTableHeader;
