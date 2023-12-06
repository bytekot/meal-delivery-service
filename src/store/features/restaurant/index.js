import { createSlice } from '@reduxjs/toolkit'

import { normalizedRestaurants } from '../../../constants/normalized-mock'

export const restaurantSlice = createSlice({
    name:'restaurant',
    initialState: {
        entities: normalizedRestaurants.reduce((entities, restaurant) => {
            entities[restaurant.id] = restaurant

            return entities
        }, {}),
        ids: normalizedRestaurants.map(restaurant => restaurant.id),
    },
});