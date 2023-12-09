import { useSelector } from 'react-redux'

import { RestaurantTabs } from './component'

import { selectRestaurantIds } from '../../store/entities/restaurant/selectors'

export const RestaurantTabsContainer = (props) => {
    const restaurantIds = useSelector(selectRestaurantIds)

    return (
        <RestaurantTabs restaurantIds={restaurantIds} {...props} />
    )
}
