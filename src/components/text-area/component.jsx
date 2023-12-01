import styles from './styles.module.scss'

import classNames from 'classnames'

export const TextArea = ({
    id,
    label,
    className,
    value,
    onChange,
    emptyText,
}) => (
    <div>
        {
            label && <label htmlFor={id} className={styles.label}>{label}</label>
        }
        <textarea
            id={id}
            value={value}
            className={classNames(styles.textArea, className)}
            onChange={onChange}
            placeholder={emptyText}
        />
    </div>
)
