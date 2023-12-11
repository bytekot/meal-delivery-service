export const selectRestaurantModule = state => state.restaurant

export const selectRestaurantEntities = state => selectRestaurantModule(state).entities

export const selectRestaurantIds = state => selectRestaurantModule(state).ids

export const selectRestaurantById = (state, id) => selectRestaurantEntities(state)[id]
