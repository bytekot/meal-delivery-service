import { createSlice } from '@reduxjs/toolkit'

import { REQUEST_STATUSES } from '../../../constants/request-statuses'
import { getReviewsByRestaurantId } from './thunks/get-reviews-by-restaurant-id'

export const reviewSlice = createSlice({
    name: 'review',
    initialState: {
        entities: {},
        ids: [],
        status: REQUEST_STATUSES.IDLE,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
                payload.forEach(review => {
                    const reviewId = review.id

                    if (!state.ids.includes(reviewId)) {
                        state.ids.push(reviewId)
                        state.entities[reviewId] = review
                    }
                })
                state.status = REQUEST_STATUSES.SUCCESS
            })
            .addCase(getReviewsByRestaurantId.rejected, (state, action) => {
                state.error = action.payload
                state.status = REQUEST_STATUSES.ERROR
            })
            .addCase(getReviewsByRestaurantId.pending, state => {
                state.status = REQUEST_STATUSES.PENDING
            })
    }
})
