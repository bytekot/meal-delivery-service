import { useState, useContext } from 'react'

import { Layout } from '../../components/layout/component'
import { ThemeContext } from '../../styles/context'
import { Tabs } from '../../components/tabs/component'
import { Restaurant } from '../../components/restaurant/component'

export const RestaurantsPage = ({ restaurants }) => {
    const { theme } = useContext(ThemeContext)
    const [restaurantIndex, setRestaurantIndex] = useState(0)

    return (
        <Layout>
            <div className={theme}>
                <Tabs
                    tabs={restaurants.map(({ name }) => name)}
                    onTabSelect={setRestaurantIndex}
                />
                <Restaurant restaurant={restaurants[restaurantIndex]} />
            </div>
        </Layout>
    )
}
