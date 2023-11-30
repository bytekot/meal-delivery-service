import { Review } from '../review/component'
import { ReviewForm } from '../review-form/component'

import styles from './styles.module.scss'

export const Reviews = ({ items }) => (
    <div className={styles.reviews}>
        <h3>Reviews</h3>
        <ul>
            {items.map(item =>
                <li key={item.id}>
                    <Review review={item} />
                </li>
            )}
        </ul>
        <ReviewForm />
    </div>
)
