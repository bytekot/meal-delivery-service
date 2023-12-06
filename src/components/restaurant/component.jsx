import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Menu } from '../menu/component'
import { Reviews } from '../reviews/component'
import { Tabs } from '../tabs/component'

import { selectRestaurantById } from '../../store/features/restaurant/selectors'

export const Restaurant = ({ restaurantId }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId))

    if (!restaurant) {
        return null
    }

    const tabs = ['Menu', 'Reviews']
    const [activeTab, setActiveTab] = useState(0)
    const { name, menu, reviews } = restaurant

    return (
        <div>
            <h2>{name}</h2>
            <Tabs tabs={tabs} onTabSelect={setActiveTab} />
            { activeTab === 0 && <Menu dishIds={menu} /> }
            { activeTab === 1 && <Reviews reviewIds={reviews} /> }
        </div>
    )
}
