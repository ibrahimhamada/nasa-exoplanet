import clsx from 'clsx';

import { poppins } from '_core/styles/fonts';

import styles from './HomeHeader.module.scss';
const HomeHeader = () => {
    return (
        <div className={styles.homeHeader}>
            <div className={clsx(poppins.className, styles.content)}>
                <h2>In God we trust;</h2>
                <h2>All others must bring data</h2>
            </div>
        </div>
    );
};
export default HomeHeader;
