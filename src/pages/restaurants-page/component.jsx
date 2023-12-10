import { useState } from 'react'

import { Layout } from '../../components/layout/component'
import { RestaurantTabsContainer } from '../../components/restaurant-tabs/container'
import { RestaurantContainer } from '../../components/restaurant/container'

export const RestaurantsPage = ({ restaurantIds }) => {
    const [restaurantId, setRestaurantId] = useState(restaurantIds[0])

    return (
        <Layout>
            <RestaurantTabsContainer
                activeTab={restaurantId}
                onTabSelect={setRestaurantId}
            />
            { restaurantId && <RestaurantContainer restaurantId={restaurantId} /> }
        </Layout>
    )
}
