import { useState } from 'react'

import { RestaurantTabs } from '../../components/restaurant-tabs/component'
import { Restaurant } from '../../components/restaurant/component'

import { Tabs } from '../../components/tabs/component'

import styles from './styles.module.scss'

export const RestaurantsPage = ({ restaurants }) => {
    const [restaurantIndex, setRestaurantIndex] = useState(0)

    console.log(restaurantIndex)

    return (
        <div className={styles.restaurantsPage}>
            <Tabs
                tabs={restaurants.map(({ name }) => name)}
                onTabSelect={setRestaurantIndex}
            />
            <Restaurant restaurant={restaurants[restaurantIndex]} />
        </div>
    )
}
