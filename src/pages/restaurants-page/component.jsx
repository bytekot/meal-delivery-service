import { useState } from 'react'
import { useSelector } from'react-redux'

import { Layout } from '../../components/layout/component'
import { RestaurantTabsContainer } from '../../components/restaurant-tabs/container'
import { Restaurant } from '../../components/restaurant/component'

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
            <Restaurant restaurantId={restaurantId} />
        </Layout>
    )
}
