import { useAuth } from '@/lib/auth';

import { Heading, Text, Code, Button } from '@chakra-ui/react';

const Home = () => {
    const auth = useAuth();
    return (
        <div>
            <main>
                <Heading>Fast Feedback</Heading>
                <Text>
                    Current user:{' '}
                    <Code>{auth.user ? auth.user.email : 'None'}</Code>
                </Text>
                {auth.user ? (
                    <Button onClick={() => auth.signout()}>sign out</Button>
                ) : (
                    <Button onClick={() => auth.signinWithGitHub()}>
                        sign in
                    </Button>
                )}
            </main>
        </div>
    );
};
export default Home;
