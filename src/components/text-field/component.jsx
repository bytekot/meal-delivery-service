import styles from './styles.module.scss'

import classNames from 'classnames'

export const TextField = ({
    id,
    label,
    className,
    value,
    onChange,
    emptyText
}) => (
    <div>
        {
            label && <label htmlFor={id} className={styles.label}>{label}</label>
        }
        <input
            id={id}
            type='text'
            value={value}
            className={classNames(styles.textField, className)}
            onChange={onChange}
            placeholder={emptyText}
        />
    </div>
)
