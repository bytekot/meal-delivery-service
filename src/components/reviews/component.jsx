import { Review } from '../review/component'
import { ReviewForm } from '../review-form/component'

import styles from './styles.module.scss'

export const Reviews = ({ reviews }) => (
    <div className={styles.reviews}>
        <h3>Reviews</h3>
        <ul>
            {reviews.map(id =>
                <li key={id}>
                    <Review id={id} />
                </li>
            )}
        </ul>
        <ReviewForm />
    </div>
)
