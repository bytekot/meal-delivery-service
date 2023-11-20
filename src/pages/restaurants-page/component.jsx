import { RestaurantNames } from '../../components/restaurant-names/component'
import { Restaurants } from '../../components/restaurants/component'

export const RestaurantsPage = ({ restaurants }) => (
    <section>
        <RestaurantNames names={restaurants.map(restaurant => restaurant.name)} />
        <Restaurants restaurants={restaurants} />
    </section>
)
