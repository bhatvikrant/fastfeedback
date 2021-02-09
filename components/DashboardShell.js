import {
    Flex,
    Link,
    Stack,
    Avatar,
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Heading,
    Box,
    Text,
    Button
} from '@chakra-ui/react';
import { LogoIcon } from '@/styles/customIcons';
import { useAuth } from '@/lib/auth';
import AddSiteModal from './AddSiteModal';

const DashboardShell = ({ children }) => {
    const auth = useAuth();
    return (
        <Flex flexDirection="column">
            <Flex
                backgroundColor="white"
                justifyContent="space-between"
                alignItems="center"
                py={4}
                px={8}
            >
                <Stack
                    spacing={4}
                    isInline
                    justifyContent="flex-start"
                    alignItems="center"
                >
                    <LogoIcon color="black" boxSize="24px" />
                    <Link display="block">Sites</Link>
                    <Link>Feedback</Link>
                </Stack>
                <Flex alignItems="center">
                    {auth?.user && (
                        <Button
                            variant="ghost"
                            mr={2}
                            onClick={() => auth.signout()}
                        >
                            Logout
                        </Button>
                    )}
                    <Avatar size="sm" src={auth?.user?.photoUrl} />
                </Flex>
            </Flex>
            <Flex backgroundColor="gray.50" p={8} height="100vh">
                <Flex
                    maxWidth="800px"
                    ml="auto"
                    mr="auto"
                    direction="column"
                    w="100%"
                >
                    <Breadcrumb>
                        <BreadcrumbItem isCurrentPage>
                            <BreadcrumbLink color="gray.700" fontSize="sm">
                                sites
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <Flex justifyContent="space-between">
                        <Heading color="black" mb={4}>
                            My Sites
                        </Heading>
                        <AddSiteModal >
                        +Add Site
                        </AddSiteModal>
                    </Flex>
                    {children}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default DashboardShell;
