import styles from './styles.module.scss'

export const User = ({ user }) => {
    return (
        <div className={styles.user}>
            <strong>{user?.name}</strong>
        </div>
    )
}
