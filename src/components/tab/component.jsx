import classNames from 'classnames'

import { Button } from '../button/component'

import styles from './styles.module.scss'

export const Tab = ({ active = false, children, onSelect }) => {
    return (
        <Button
            className={classNames(styles.tab, {
                [styles.active]: active
            })}
            onClick={onSelect}
        >
            {children}
        </Button>
    )
}
