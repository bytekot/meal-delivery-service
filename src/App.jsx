
import { Provider } from 'react-redux'
import { RestaurantsPage } from './pages/restaurants-page/component'
import store from './store'

import './styles/index.scss'

export const App = () => (
    <Provider store={store}>
        <RestaurantsPage />
    </Provider>
)
