import { useSelector } from 'react-redux'

import { Review } from './component'

import { selectReviewById } from '../../store/entities/review/selectors'

export const ReviewContainer = ({ reviewId }) => {
    const review = useSelector(state => selectReviewById(state, reviewId))

    return <Review review={review} />
}
