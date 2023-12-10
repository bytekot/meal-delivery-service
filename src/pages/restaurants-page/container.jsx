import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { RestaurantsPage } from './component'

import { selectRestaurantIds } from '../../store/entities/restaurant/selectors'
import { getRestaurants } from '../../store/entities/restaurant/thunks/get-restaurants'

export const RestaurantsPageContainer = () => {
    const restaurantIds = useSelector(selectRestaurantIds)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRestaurants())
    }, [])

    return (
        <RestaurantsPage restaurantIds={restaurantIds} />
    )
}
