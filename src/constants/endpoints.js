const API_URL = 'http://localhost:3001/api'

export const ENDPOINTS = {
    restaurants: {
        all: `${API_URL}/restaurants`,
        byId: id => `${API_URL}/restaurant/${id}`,
    },
    dishes: {
        byId: id => `${API_URL}/dish/${id}`,
        byRestaurantId: restaurantId => `${API_URL}/dishes?restaurantId=${restaurantId}`,
    },
    reviews: {
        byRestaurantId: restaurantId => `${API_URL}/reviews?restaurantId=${restaurantId}`,
    },
    users: {
        all: `${API_URL}/users`,
    },
}
