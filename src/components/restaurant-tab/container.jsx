import { useSelector } from 'react-redux'

import { Tab } from '../tab/component'

import { selectRestaurantById } from '../../store/entities/restaurant/selectors'

export const RestaurantTabContainer = ({ restaurantId, ...props }) => {
    const restaurant = useSelector(state => selectRestaurantById(state, restaurantId))

    return (
        <Tab {...props}>{restaurant?.name}</Tab>
    )
}
