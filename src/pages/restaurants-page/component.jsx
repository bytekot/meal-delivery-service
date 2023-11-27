import { useState } from 'react'

import { RestaurantTabs } from '../../components/restaurant-tabs/component'
import { Restaurant } from '../../components/restaurant/component'

export const RestaurantsPage = ({ restaurants }) => {
    const [selectedTab, setSelectedTab] = useState()
    const restaurant = restaurants.find(({ id }) => selectedTab && id === selectedTab.id)

    return (
        <section>
            <RestaurantTabs
                restaurants={restaurants}
                onTabSelect={setSelectedTab}
            />
            <Restaurant restaurant={restaurant} />
        </section>
    )
}
