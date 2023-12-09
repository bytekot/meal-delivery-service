import { UserContainer } from '../user/container'

import styles from './styles.module.scss'
// divide the UI components into smart and dumb
export const Review = ({ review }) => {
    if (!review) {
        return null
    }

    const { userId, text } = review

    return (
        <div className={styles.review}>
            <UserContainer userId={userId} />
            <div>{text}</div>
        </div>
    )
}
