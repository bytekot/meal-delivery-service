import { Button } from '../button/component'

import { BUTTON_TYPES } from '../../constants/components'

import styles from './styles.module.scss'

import classNames from 'classnames'

export const Header = ({ className }) => (
    <div className={classNames(styles.header, className)}>
        <Button className={styles.button} type={BUTTON_TYPES.SECONDARY}>Toggle theme</Button>
        <Button className={styles.button}>Order</Button>
    </div>
)
