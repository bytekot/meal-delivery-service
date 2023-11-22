import { Restaurant } from '../restaurant/component'

export const Restaurants = ({ restaurants }) => (
    <div>
        {restaurants.map(restaurant =>
            <Restaurant key={restaurant.id} data={restaurant} />
        )}
    </div>
)
