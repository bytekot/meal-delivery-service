import styles from './styles.module.scss'

export const TextField = ({ id, label, value, onChange }) => (
    <div>
        { label && <label htmlFor={id} className={styles.label}>{label}</label> }
        <input
            id={id}
            type='text'
            value={value}
            className={styles.textField}
            onChange={onChange}
        />
    </div>
)
