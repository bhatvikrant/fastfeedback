import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: (props) => ({
            html: {
                minWidth: '360px',
                scrollBehaviour: 'smooth'
            },
            '#__next': {
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh'
            },
            body: {
                backgroundColor: '#edf2f7'
            }
        })
    },
    fonts: {
        body: `Inter,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`
    },
    fontWeights: {
        normal: 400,
        medium: 600,
        bold: 700
    }
});

export default theme;
