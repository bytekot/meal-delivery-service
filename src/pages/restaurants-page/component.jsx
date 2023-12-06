import { useState } from 'react'
import { useSelector } from'react-redux'

import { Layout } from '../../components/layout/component'
import { Tabs } from '../../components/tabs/component'
import { Restaurant } from '../../components/restaurant/component'

import { selectRestaurantById, selectRestaurantIds } from '../../store/features/restaurant/selectors'

export const RestaurantsPage = () => {
    const restaurantIds = useSelector(selectRestaurantIds)
    const [restaurantId, setRestaurantId] = useState(restaurantIds[0])

    const tabs = restaurantIds.map(id => ({
        id: id,
        label: useSelector(state => selectRestaurantById(state, id)).name,
    }))

    return (
        <Layout>
            <Tabs
                tabs={tabs}
                onTabSelect={setRestaurantId}
            />
            <Restaurant restaurantId={restaurantId} />
        </Layout>
    )
}
