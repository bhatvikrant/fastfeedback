import Head from 'next/head';

import { useAuth } from '@/lib/auth';
import { GithubIcon, GoogleIcon, LogoIcon } from '@/styles/customIcons';

import { Button, Flex, Stack } from '@chakra-ui/react';

const Home = () => {
    const auth = useAuth();

    return (
        <Flex
            as="main"
            direction="column"
            align="center"
            justifyContent="center"
            h="100vh"
        >
            <Head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        `
                    }}
                />
                <title>Fast Feedback</title>
            </Head>
            <LogoIcon color="black" boxSize="64px" />

            {auth.user ? (
                <Button
                    backgroundColor="white"
                    color="gray.900"
                    variant="outline"
                    mt={4}
                    size="md"
                    fontWeight="medium"
                    _hover={{ bg: 'gray.100' }}
                    _active={{ bg: 'gray.100', transform: 'scale(0.95)' }}
                    as="a"
                    href="/dashboard"
                >
                    View Dashboard
                </Button>
            ) : (
                <Stack>
                    <Button
                        backgroundColor="gray.900"
                        color="white"
                        mt={4}
                        size="md"
                        fontWeight="medium"
                        _hover={{ bg: 'gray.700' }}
                        _active={{ bg: 'gray.800', transform: 'scale(0.95)' }}
                        leftIcon={<GithubIcon />}
                        onClick={() => auth.signinWithGitHub()}
                    >
                        Sign In with Github
                    </Button>
                    <Button
                        backgroundColor="white"
                        color="gray.900"
                        variant="outline"
                        mt={4}
                        size="md"
                        fontWeight="medium"
                        _hover={{ bg: 'gray.100' }}
                        _active={{ bg: 'gray.100', transform: 'scale(0.95)' }}
                        leftIcon={<GoogleIcon />}
                        onClick={() => auth.signinWithGoogle()}
                    >
                        Sign In with Google
                    </Button>
                </Stack>
            )}
        </Flex>
    );
};
export default Home;
