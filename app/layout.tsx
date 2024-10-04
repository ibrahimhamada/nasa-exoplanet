import React from 'react';

import { cookies } from 'next/headers';
import { Metadata } from 'next';

import { ETheme, THEME_COOKIE_KEY } from '_core/constants/theme';
import coreConfig from '_core/config';
import { inter } from '_core/styles/fonts';
import '_core/styles/base.scss';
import { ThemeContextProvider } from '_core/contexts/themeContext';
import Header from '_core/components/Header';
import Main from '_core/components/Main';
import Footer from '_core/components/Footer';
// import auth from '../_coreservices/auth';

// import { getHomePageData } from '../_core/utils/homepage';

type TProps = {
    children: React.ReactNode;
};

const RootLayout = async ({ children }: TProps) => {
    const theme = cookies().get(THEME_COOKIE_KEY)?.value || coreConfig.themes[0];

    // const res = await auth.auth();

    // const fileData = await getHomePageData();
    return (
        <html lang="en" className={inter.className}>
            <ThemeContextProvider theme={theme as ETheme}>
                <Header />

                <Main>{children}</Main>

                <div id="portal"></div>
                {/* <Footer /> */}
            </ThemeContextProvider>
        </html>
    );
};
export const generateMetadata = async () => {
    const metadata: Metadata = {};
    metadata.title = 'Lighthouse';
    metadata.description = 'Lighthouse is a Next.js app with a custom server and middleware.';

    return metadata;
};
export default RootLayout;
