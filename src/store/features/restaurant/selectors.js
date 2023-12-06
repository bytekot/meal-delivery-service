export const selectRestaurantModule = state => state.restaurant

export const selectRestaurantEntities = state => selectRestaurantModule(state).entities

export const selectRestaurantIds = state => selectRestaurantModule(state).ids

export const selectRestaurantById = (state, id) => selectRestaurantEntities(state)[id]

export const selectRestaurantNameById = (state, id) => selectRestaurantById(state, id)?.name

export const selectRestaurantNames = state =>
    selectRestaurantIds(state)
        .reduce((names, id) => {
            names[id] = selectRestaurantNameById(state, id)

            return names
        }, {})
