import { configureStore } from '@reduxjs/toolkit'

import { restaurantSlice } from './features/restaurant'
import { dishSlice } from './features/dish'
import { reviewSlice } from './features/review'
import { userSlice } from './features/user'

export const store = configureStore({
    restaurants: restaurantSlice.reducer,
    dishes: dishSlice.reducer,
    reviews: reviewSlice.reducer,
    users: userSlice.reducer,
})
