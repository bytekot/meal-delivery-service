import { createAsyncThunk } from '@reduxjs/toolkit'
import { ENDPOINTS } from '../../../../constants/endpoints'
import { selectDishIdsByRestaurantId } from '../../restaurant/selectors'
import { selectDishById } from '../selectors'

export const getDishesByRestaurantId = createAsyncThunk('dish/getDishesByRestaurantId',

    async (restaurantId, { rejectWithValue }) => {
        const response = await fetch(ENDPOINTS.dishes.byRestaurantId(restaurantId))
        const dishes = await response.json()

        if (!dishes?.length) {
            rejectWithValue(`No dishes found for the restaurant with ID "${restaurantId}".`)
        }

        return dishes
    },
    {
        condition: (restaurantId, { getState }) => {
            const restaurantDishIds = selectDishIdsByRestaurantId(getState(), restaurantId)

            return restaurantDishIds.some(dishId => !selectDishById(getState(), dishId))
        },
    }
)
