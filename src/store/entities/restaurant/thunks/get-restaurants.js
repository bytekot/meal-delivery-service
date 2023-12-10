import { createAsyncThunk } from '@reduxjs/toolkit'

import { selectRestaurantIds } from '../selectors'

import { ENDPOINTS } from '../../../../constants/endpoints'

export const getRestaurants = createAsyncThunk('restaurant/getRestaurants',

    async (_, { rejectWithValue }) => {
        const response = await fetch(ENDPOINTS.restaurants.all)
        const restaurants = await response.json()

        if (!restaurants?.length) {
            rejectWithValue('No restaurants found.')
        }

        return restaurants
    },
    {
        condition: (_, { getState }) => !selectRestaurantIds(getState()).length,
    }
)
