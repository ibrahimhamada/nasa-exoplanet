'use client';

import React, { createContext, useCallback, useContext, useState } from 'react';

import { getCookie, setCookie } from '../utils/client';
import { ETheme, THEME_COOKIE_KEY } from '../constants/theme';

type TThemeContextValues = {
    theme: ETheme;
    setTheme: (theme: ETheme) => void;
};

const initThemeValues: TThemeContextValues = {
    theme: ETheme.Light,
    setTheme: () => {},
};

const ThemeContext = createContext<TThemeContextValues>(initThemeValues);

type TProps = {
    theme: ETheme;
    children: React.ReactNode;
};
export const ThemeContextProvider = ({ theme: themeFromServer, children }: TProps) => {
    // need this to maintain state even though the component gets streamed
    const themeFromCookie = getCookie(THEME_COOKIE_KEY);
    const [theme, setTheme] = useState(themeFromCookie || themeFromServer);

    const setThemeAndCookie = useCallback(
        (newTheme: ETheme) => {
            if (newTheme === theme) {
                return;
            }

            setTheme(newTheme);
            setCookie(THEME_COOKIE_KEY, newTheme);
        },
        [theme],
    );

    const values: TThemeContextValues = {
        theme,
        setTheme: setThemeAndCookie,
    };

    return (
        <ThemeContext.Provider value={values}>
            <body data-theme={theme}>{children}</body>
        </ThemeContext.Provider>
    );
};

export const useThemeContext = () => {
    const contextData = useContext(ThemeContext);

    return contextData;
};

export default ThemeContext;
