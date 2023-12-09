import { ReviewContainer } from '../review/container'
import { ReviewForm } from '../review-form/component'

import styles from './styles.module.scss'

export const Reviews = ({ reviewIds }) => (
    <div className={styles.reviews}>
        <h3>Reviews</h3>
        <ul>
            {reviewIds.map(reviewId =>
                <li key={reviewId}>
                    <ReviewContainer reviewId={reviewId} />
                </li>
            )}
        </ul>
        <ReviewForm />
    </div>
)
