import { RestaurantTab } from '../restaurant-tab/component'

export const RestaurantTabs = ({ restaurants, onTabSelect }) => (
    <div>
        {restaurants.map(restaurant =>
            <RestaurantTab
                key={restaurant.id}
                restaurant={restaurant}
                onSelect={() => onTabSelect(restaurant.id)}
            />
        )}
    </div>
)
