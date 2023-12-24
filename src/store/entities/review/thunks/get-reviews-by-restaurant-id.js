import { createAsyncThunk } from '@reduxjs/toolkit'
import { ENDPOINTS } from '../../../../constants/endpoints'
import { selectReviewIdsByRestaurantId } from '../../restaurant/selectors'
import { selectReviewById } from '../selectors'

export const getReviewsByRestaurantId = createAsyncThunk('review/getReviewsByRestaurantId',

    async (restaurantId, { rejectWithValue }) => {
        const response = await fetch(ENDPOINTS.reviews.byRestaurantId(restaurantId))
        const reviews = await response.json()

        if (!reviews?.length) {
            rejectWithValue(`No reviews found for the restaurant with ID "${restaurantId}".`)
        }

        return reviews
    },
    {
        condition: (restaurantId, { getState }) => {
            const restaurantReviewIds = selectReviewIdsByRestaurantId(getState(), restaurantId)

            return restaurantReviewIds.some(reviewId => !selectReviewById(getState(), reviewId))
        },
    }
)
