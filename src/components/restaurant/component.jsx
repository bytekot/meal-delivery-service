import { useState } from 'react'

import { Menu } from '../menu/component'
import { Reviews } from '../reviews/component'
import { ReviewForm } from '../review-form/component'
import { Tabs } from '../tabs/component'

export const Restaurant = ({ restaurant }) => {
    if (!restaurant) {
        return null
    } 

    const { name, menu, reviews } = restaurant

    const [activeTab, setActiveTab] = useState(0)

    return (
        <div>
            <h2>{name}</h2>
            <Tabs tabs={['Menu', 'Reviews']} onTabSelect={setActiveTab} />
            { activeTab === 0 && <Menu items={menu} /> }
            { activeTab === 1 && <Reviews items={reviews} /> }
            {/* <ReviewForm /> */}
        </div>
    )
}
