import { useState } from 'react'

import { Menu } from '../menu/component'
import { Reviews } from '../reviews/component'
import { Tabs } from '../tabs/component'

const RESTAURANT_TABS = ['Menu', 'Reviews']

export const Restaurant = ({ restaurant }) => {
    const [activeTab, setActiveTab] = useState(0)

    if (!restaurant) {
        return null
    }

    const { name, menu, reviews } = restaurant

    return (
        <div>
            <h2>{name}</h2>
            <Tabs
                tabs={RESTAURANT_TABS}
                activeTab={activeTab}
                onTabSelect={setActiveTab}
            />
            {
                activeTab === 0 && <Menu dishIds={menu} />
            }
            {
                activeTab === 1 && <Reviews reviewIds={reviews} />
            }
        </div>
    )
}
