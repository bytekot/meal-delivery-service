import { createSlice } from '@reduxjs/toolkit'

import { getRestaurants } from './thunks/get-restaurants'

import { REQUEST_STATUSES } from '../../../constants/request-statuses'

export const restaurantSlice = createSlice({
    name:'restaurant',
    initialState: {
        entities: {},
        ids: [],
        status: REQUEST_STATUSES.IDLE,
        error: null,
    },
    extraReducers: builder => {
        builder
           .addCase(getRestaurants.fulfilled, (state, { payload }) => {
                state.entities = payload.reduce((entities, restaurant) => {
                    entities[restaurant.id] = restaurant

                    return entities
                }, {})
                state.ids = payload.map(restaurant => restaurant.id)
                state.status = REQUEST_STATUSES.SUCCESS
            })
            .addCase(getRestaurants.rejected, (state, action) => {
                state.error = action.payload
                state.status = REQUEST_STATUSES.ERROR
            })
            .addCase(getRestaurants.pending, state => {
                state.status = REQUEST_STATUSES.PENDING
            })
    }
})
