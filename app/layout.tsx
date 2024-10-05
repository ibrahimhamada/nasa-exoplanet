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

type TProps = {
    children: React.ReactNode;
};

const RootLayout = async ({ children }: TProps) => {
    const theme = cookies().get(THEME_COOKIE_KEY)?.value || coreConfig.themes[0];
    return (
        <html lang="en" className={inter.className}>
            <ThemeContextProvider theme={theme as ETheme}>
                <Header />
                <Main>{children}</Main>
                <div id="portal"></div>
            </ThemeContextProvider>
        </html>
    );
};
export const generateMetadata = async () => {
    const metadata: Metadata = {};
    metadata.title = 'ExoVison';

    return metadata;
};
export default RootLayout;
