import { useRef, useState } from 'react';

import { useRouter } from 'next/router';

import Feedback from '@/components/Feedback';
import { useAuth } from '@/lib/auth';
import { getAllFeedback, getAllSites } from '@/lib/db-admin';
import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { createFeedback } from '@/lib/db';

export async function getStaticProps(ctx) {
    const siteId = ctx.params.siteId;
    const { feedback } = await getAllFeedback(siteId);

    return {
        props: {
            initialFeedback: feedback
        }
    };
}

export async function getStaticPaths(ctx) {
    const { sites } = await getAllSites();

    const paths = sites.map((site) => ({
        params: {
            siteId: site.id.toString()
        }
    }));

    return {
        paths,
        fallback: false
    };
}

const SiteFeedback = ({ initialFeedback }) => {
    const auth = useAuth();
    const router = useRouter();
    const inputRef = useRef(null);

    const [allFeedback, setAllFeedback] = useState(initialFeedback);

    const onSubmit = (e) => {
        e.preventDefault();
        const newFeedback = {
            author: auth.user.name,
            authorId: auth.user.uid,
            siteId: router.query.siteId,
            text: inputRef.current.value,
            createdAt: new Date().toISOString(),
            provider: auth.user.provider,
            status: 'pending'
        };

        setAllFeedback([newFeedback, ...allFeedback]);

        createFeedback(newFeedback);
    };
    return (
        <Box
            display="flex"
            flexDirection="column"
            width="full"
            maxWidth="700px"
            margin="0 auto"
        >
            <Box as="form" onSubmit={onSubmit}>
                <FormControl my={8}>
                    <FormLabel htmlFor="comment">Comment</FormLabel>
                    <Input type="comment" id="comment" ref={inputRef} />
                    <Button type="submit" fontWeight="medium" mt={2}>
                        Add Comment
                    </Button>
                </FormControl>
            </Box>
            {allFeedback.map((feedback) => (
                <Feedback key={feedback.id} {...feedback} />
            ))}
        </Box>
    );
};

export default SiteFeedback;
