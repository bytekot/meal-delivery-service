import { useState } from 'react'
import { useSelector } from 'react-redux'

import { Menu } from '../menu/component'
import { Reviews } from '../reviews/component'
import { Tabs } from '../tabs/component'

import { selectRestaurantById } from '../../store/features/restaurant/selectors'

export const Restaurant = ({ restaurantId }) => {
    if (!restaurantId) {
        return null
    }

    const [activeTab, setActiveTab] = useState(0)

    const { name, menu, reviews } = useSelector(state => selectRestaurantById(state, restaurantId))

    return (
        <div>
            <h2>{name}</h2>
            <Tabs tabs={['Menu', 'Reviews']} onTabSelect={setActiveTab} />
            { activeTab === 0 && <Menu dishes={menu} /> }
            { activeTab === 1 && <Reviews reviews={reviews} /> }
        </div>
    )
}
