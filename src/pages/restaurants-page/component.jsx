import { useState } from 'react'

import { Tabs } from '../../components/tabs/component'
import { Restaurant } from '../../components/restaurant/component'

import styles from './styles.module.scss'

export const RestaurantsPage = ({ restaurants }) => {
    const [restaurantIndex, setRestaurantIndex] = useState(0)

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
