import classNames from 'classnames'

import { ThemeToggle } from '../theme-toggle/component'

import styles from './styles.module.scss'

export const Header = ({ className }) => {
    return (
        <div className={classNames(styles.header, className)}>
            <ThemeToggle className={styles.themeToggle} />
        </div>
    )
}
