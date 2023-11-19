import { RestaurantsPage } from './pages/restaurants-page/component'

export const App = ({ restaurants }) => {
    return (
        <div>
            <RestaurantsPage restaurants={restaurants}></RestaurantsPage>
        </div>
    )
}
