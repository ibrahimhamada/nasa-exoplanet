import { ETheme } from './constants/theme';

const themes = [ETheme.Light, ETheme.Dark];
const coreConfig = {
    themes,
} as const;

export default coreConfig;
