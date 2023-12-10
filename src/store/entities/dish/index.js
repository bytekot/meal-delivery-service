import { createSlice } from '@reduxjs/toolkit'

import { getDishById } from './thunks/get-dish-by-id'
import { getDishesByRestaurantId } from './thunks/get-dishes-by-restaurant-id'

import { REQUEST_STATUSES } from '../../../constants/request-statuses'

export const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        entities: {},
        ids: [],
        status: REQUEST_STATUSES.IDLE,
        error: null,
    },
    extraReducers: builder => {
        builder
            /** getDishesByRestaurantId */
            .addCase(getDishesByRestaurantId.fulfilled, (state, { payload }) => {
                payload.forEach(dish => {
                    const dishId = dish.id

                    if (!state.ids.includes(dishId)) {
                        state.ids.push(dishId)
                        state.entities[dishId] = dish
                    }
                })
                state.status = REQUEST_STATUSES.SUCCESS
            })
            .addCase(getDishesByRestaurantId.rejected, (state, action) => {
                state.error = action.payload
                state.status = REQUEST_STATUSES.ERROR
            })
            .addCase(getDishesByRestaurantId.pending, state => {
                state.status = REQUEST_STATUSES.PENDING
            })

            /** getDishById */
            .addCase(getDishById.fulfilled, (state, action) => {
                const dish = action.payload

                if (!state.ids.includes(dish.id)) {
                    state.entities[dish.id] = dish
                    state.ids.push(dish.id)
                }
                state.status = REQUEST_STATUSES.SUCCESS
            })
            .addCase(getDishById.rejected, (state, action) => {
                state.error = action.payload
                state.status = REQUEST_STATUSES.ERROR
            })
            .addCase(getDishById.pending, state => {
                state.status = REQUEST_STATUSES.PENDING
            })
    }
})
