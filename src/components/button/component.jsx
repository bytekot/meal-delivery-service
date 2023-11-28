import styles from './styles.module.scss'

export const Button = ({ className = '', disabled = false, children, onClick }) => {
    return (
        <button 
            className={`${styles.button} ${className}`} 
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
