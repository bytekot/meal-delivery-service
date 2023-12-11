import { useSelector } from 'react-redux'

import { Dish } from './component'

import { selectDishById } from '../../store/entities/dish/selectors'

export const DishContainer = ({ dishId }) => {
    const dish = useSelector(state => selectDishById(state, dishId))

    return <Dish dish={dish} />
}
