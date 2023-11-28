import { Button } from '../button/component'

import styles from './styles.module.scss'

export const Tab = ({ active = false, label, onSelect }) => {
    return (
        <Button 
            className={`${styles.tab} ${active ? styles.active : ''}`}
            onClick={onSelect}
        >
            {label}
        </Button>
    )
}
