import NextLink from 'next/link';
import { Flex, Link, Stack, Avatar, Button } from '@chakra-ui/react';
import { LogoIcon } from '@/styles/customIcons';
import { useAuth } from '@/lib/auth';

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
                    <NextLink href="/">
                        <LogoIcon color="black" boxSize="24px" />
                    </NextLink>

                    <NextLink href="/dashboard">
                        <Link display="block">Sites</Link>
                    </NextLink>
                    <NextLink href="/feedback">
                        <Link>Feedback</Link>
                    </NextLink>
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
                    {children}
                </Flex>
            </Flex>
        </Flex>
    );
};

export default DashboardShell;
