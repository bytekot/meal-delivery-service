import styles from './styles.module.scss'

export const TextArea = ({ id, label, value, onChange, emptyText }) => (
    <div>
        { label && <label htmlFor={id} className={styles.label}>{label}</label> }
        <textarea
            id={id}
            value={value}
            className={styles.textArea}
            onChange={onChange}
            placeholder={emptyText}
        />
    </div>
)
