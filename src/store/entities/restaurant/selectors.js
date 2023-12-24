export const selectRestaurantModule = state => state.restaurant

export const selectRestaurantEntities = state => selectRestaurantModule(state).entities

export const selectRestaurantIds = state => selectRestaurantModule(state).ids

export const selectRestaurantById = (state, id) => selectRestaurantEntities(state)[id]

export const selectReviewIdsByRestaurantId = (state, restaurantId) => selectRestaurantById(state, restaurantId)?.reviews

export const selectDishIdsByRestaurantId = (state, restaurantId) => selectRestaurantById(state, restaurantId)?.menu
