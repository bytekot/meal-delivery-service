import styles from './styles.module.scss'

export const Review = ({ review }) => {
    const { user, rating, text } = review

    return (
        <div className={styles.review}>
            <div className={styles.user}>
                <strong>{user}</strong>
            </div>
            <div>{text}</div>
        </div>
    )
}
