import { useState } from 'react'
import { useSelector } from'react-redux'

import { Layout } from '../../components/layout/component'
import { RestaurantTabsContainer } from '../../components/restaurant-tabs/container'
import { RestaurantContainer } from '../../components/restaurant/container'

import { selectRestaurantIds } from '../../store/entities/restaurant/selectors'

export const RestaurantsPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds)
    const [restaurantId, setRestaurantId] = useState(restaurantIds[0])

    return (
        <Layout>
            <RestaurantTabsContainer
                activeTab={restaurantId}
                onTabSelect={setRestaurantId}
            />
            <RestaurantContainer restaurantId={restaurantId} />
        </Layout>
    )
}
