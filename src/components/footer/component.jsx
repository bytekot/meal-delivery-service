import styles from './styles.module.scss'

import classNames from 'classnames'

export const Footer = ({ className }) => (
    <div className={classNames(styles.footer, className)} />
)
