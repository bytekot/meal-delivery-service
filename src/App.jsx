import { Provider } from 'react-redux'
import { RestaurantsPageContainer } from './pages/restaurants-page/container'
import store from './store'

import './styles/index.scss'

export const App = () => (
    <Provider store={store}>
        <RestaurantsPageContainer />
    </Provider>
)
