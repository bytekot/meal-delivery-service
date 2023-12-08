import { useSelector } from 'react-redux'

import { selectReviewById } from '../../store/entities/review/selectors'
import { selectUserById } from '../../store/entities/user/selectors'

import styles from './styles.module.scss'

export const Review = ({ id }) => {
    const review = useSelector(state => selectReviewById(state, id))

    if (!review) {
        return null
    }

    const { userId, text } = review
    const user = useSelector(state => selectUserById(state, userId))

    return (
        <div className={styles.review}>
            <div className={styles.user}>
                <strong>{user.name}</strong>
            </div>
            <div>{text}</div>
        </div>
    )
}
