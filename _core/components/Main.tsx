import React from 'react';

import clsx from 'clsx';

import styles from './Main.module.scss';

type TProps = {
    children: React.ReactNode;
};

const Main = ({ children }: TProps) => {
    return <div className={clsx('siteWidthContainer', styles.container)}>{children}</div>;
};

export default Main;
