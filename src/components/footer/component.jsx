import { Button } from '../button/component'

import styles from './styles.module.scss'

import classNames from 'classnames'

export const Footer = ({ className }) => (
    <div className={classNames(styles.footer, className)}>
        <Button className={styles.button}>Contacts</Button>
    </div>
)
