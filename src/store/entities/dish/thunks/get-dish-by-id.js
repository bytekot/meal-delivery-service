import { createAsyncThunk } from '@reduxjs/toolkit'
import { ENDPOINTS } from '../../../../constants/endpoints'
import { selectDishById } from '../selectors'

export const getDishById = createAsyncThunk('dish/getDishById',

    async (dishId, { rejectWithValue }) => {
        const response = await fetch(ENDPOINTS.dishes.byId(dishId))
        const dish = await response.json()

        if (!dish) {
            rejectWithValue(`No dish with ID "${dishId}" found.`)
        }

        return dish
    },
    {
        condition: (dishId, { getState }) => !selectDishById(getState(), dishId),
    }
)
