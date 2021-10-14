import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import GoogleFonts from './components/GoogleFronts'
import { Meta } from '@storybook/react';

import App from './App';

export default {
    component: App,
    title: 'Navbar',
} as Meta;

export const Primary: React.VFC<{}> = () =>
    <>
        <GlobalStyles />
        <GoogleFonts
            hrefs={[
                'https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&family=Titillium+Web:wght@400;600;700;900&display=swap',
                'https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;700;900&display=swap',
            ]}
        />
        <App />
    </>;