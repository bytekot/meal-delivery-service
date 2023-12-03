
import { ThemeProvider } from './styles/context'
import { RestaurantsPage } from './pages/restaurants-page/component'

import './styles/index.scss'

export const App = ({ restaurants }) => (
    <ThemeProvider>
        <RestaurantsPage restaurants={restaurants} />
    </ThemeProvider>
)
