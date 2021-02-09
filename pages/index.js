import { useRouter } from 'next/router';

import { useAuth } from '@/lib/auth';
import { LogoIcon } from '@/styles/customIcons';

import { Heading, Text, Code, Button, Flex } from '@chakra-ui/react';

const Home = () => {
    const auth = useAuth();

    const router = useRouter();
    return (
        <Flex
            as="main"
            direction="column"
            align="center"
            justifyContent="center"
            h="100vh"
        >
            <LogoIcon color="black" boxSize="64px" />

            {auth.user ? (
                <Button onClick={() => router.push('/dashboard')}>
                    Go to Dashboard
                </Button>
            ) : (
                <Button
                    mt={4}
                    size="sm"
                    onClick={() => auth.signinWithGitHub()}
                >
                    sign in
                </Button>
            )}
        </Flex>
    );
};
export default Home;
