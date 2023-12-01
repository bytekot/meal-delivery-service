import styles from './styles.module.scss'

import classNames from 'classnames'

export const Header = ({ className }) => (
    <div className={classNames(styles.header, className)} />
)
