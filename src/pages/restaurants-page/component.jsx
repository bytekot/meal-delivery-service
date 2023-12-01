import { useState } from 'react'

import { Layout } from '../../components/layout/component'
import { Tabs } from '../../components/tabs/component'
import { Restaurant } from '../../components/restaurant/component'

export const RestaurantsPage = ({ restaurants }) => {
    const [restaurantIndex, setRestaurantIndex] = useState(0)

    return (
        <Layout>
            <Tabs
                tabs={restaurants.map(({ name }) => name)}
                onTabSelect={setRestaurantIndex}
            />
            <Restaurant restaurant={restaurants[restaurantIndex]} />
        </Layout>
    )
}
