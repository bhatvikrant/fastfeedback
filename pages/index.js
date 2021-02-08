import { useAuth } from '@/lib/auth';
import { LogoIcon } from '@/styles/customIcons';

import { Heading, Text, Code, Button, Flex } from '@chakra-ui/react';

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
            <LogoIcon color="black" boxSize="64px" />
            {/* <Text>
                Current user:{' '}
                <Code>{auth.user ? auth.user.email : 'None'}</Code>
            </Text> */}
            {auth.user ? (
                <Button onClick={() => auth.signout()}>sign out</Button>
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
