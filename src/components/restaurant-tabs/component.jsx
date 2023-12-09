import { RestaurantTabContainer } from '../restaurant-tab/container'

import styles from '../tabs/styles.module.scss'

export const RestaurantTabs = ({ restaurantIds, activeTab, onTabSelect }) => {
    return (
        <div className={styles.tabs}>
            {restaurantIds.map(restaurantId => {
                return (
                    <RestaurantTabContainer
                        key={restaurantId}
                        restaurantId={restaurantId}
                        active={activeTab === restaurantId}
                        onSelect={() => onTabSelect(restaurantId)}
                    />
                )
            })}
        </div>
    )
}
