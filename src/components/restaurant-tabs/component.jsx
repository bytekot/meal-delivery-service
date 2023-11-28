import { useState } from 'react'
import { Tab } from '../tab/component'

import styles from './styles.module.scss'

export const RestaurantTabs = ({ restaurants, onTabSelect }) => {
    const [active, setActive] = useState(null)

    return (
        <div className={styles.restaurantTabs}>
            {restaurants.map(({ id, name }) =>
                <Tab
                    key={id}
                    label={name}
                    active={active === id}
                    onSelect={() => {
                        onTabSelect(id)
                        setActive(id)
                    }}
                />
            )}
        </div>
    )
}

// export const Tabs = ({ tabs, onTabSelect }) => {
//     const [active, setActive] = useState(null)

//     return (
//         <div className={styles.Tabs}>
//             {tabs.map((label, index) =>
//                 <Tab
//                     key={index}
//                     label={label}
//                     active={active === index}
//                     onSelect={() => {
//                         onTabSelect(index)
//                         setActive(index)
//                     }}
//                 />
//             )}
//         </div>
//     )
// }
