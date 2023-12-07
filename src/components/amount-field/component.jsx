import { Button } from '../button/component'

import { BUTTON_TYPES } from '../../constants/components'

import styles from './styles.module.scss'

export const AmountField = ({
    value = 0,
    min = 0,
    max = 5,
    onPlus,
    onMinus,
    label,
}) => (
    <div className={styles.amountField}>
        {
            label && <label className={styles.label}>{label}</label>
        }
        <Button
            type={BUTTON_TYPES.SECONDARY}
            onClick={onMinus}
            disabled={value <= min}
        > 
            - 
        </Button>

        <span className={styles.amount}>{value}</span>

        <Button
            type={BUTTON_TYPES.SECONDARY}
            onClick={onPlus}
            disabled={value >= max}
        >
            +
        </Button>
    </div>
)
