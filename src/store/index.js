import { configureStore } from '@reduxjs/toolkit'

import { restaurantSlice } from './features/restaurant'
import { dishSlice } from './features/dish'
import { reviewSlice } from './features/review'
import { userSlice } from './features/user'

const store = configureStore({
    reducer: {
        restaurant: restaurantSlice.reducer,
        dish: dishSlice.reducer,
        review: reviewSlice.reducer,
        user: userSlice.reducer,
    },
})

export default store
