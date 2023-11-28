import styles from './styles.module.scss'

export const Button = ({ className = '', children, onClick }) => {
    return (
        <button 
            className={`${styles.button} ${className}`} 
            onClick={onClick}
        >
            {children}
        </button>
    );
}
