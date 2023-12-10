import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { Restaurant } from './component'

import { selectRestaurantById } from '../../store/entities/restaurant/selectors'
import { getReviewsByRestaurantId } from '../../store/entities/review/thunks/get-reviews-by-restaurant-id'
import { getDishesByRestaurantId } from '../../store/entities/dish/thunks/get-dishes-by-restaurant-id'

export const RestaurantContainer = ({ restaurantId }) => {
    const restaurant = useSelector(state =>
        selectRestaurantById(state, restaurantId)
    )
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getReviewsByRestaurantId(restaurantId))
        dispatch(getDishesByRestaurantId(restaurantId))
    }, [restaurantId])

    return <Restaurant restaurant={restaurant} />
}
