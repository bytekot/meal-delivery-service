import { createSlice } from '@reduxjs/toolkit'

import { normalizedReviews } from '../../../constants/normalized-mock'

export const reviewSlice = createSlice({
    name:'review',
    initialState: {
        entities: normalizedReviews.reduce((entities, review) => {
            entities[review.id] = review

            return entities
        }),
        ids: normalizedReviews.map(review => review.id),
    },
})
