import { useState } from 'react'

import { RestaurantTabs } from '../../components/restaurant-tabs/component'
import { Restaurant } from '../../components/restaurant/component'

export const RestaurantsPage = ({ restaurants }) => {
    const [restaurantId, setRestaurantId] = useState()
    const restaurant = restaurants.find(({ id }) => restaurantId && id === restaurantId)

    return (
        <div>
            <RestaurantTabs
                restaurants={restaurants.map(({ id, name }) => ({ id, name }))}
                onTabSelect={setRestaurantId}
            />
            <Restaurant restaurant={restaurant} />
        </div>
    )
}
