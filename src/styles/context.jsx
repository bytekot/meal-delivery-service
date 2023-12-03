import { createContext, useState } from 'react'
import { THEMES } from '../constants/components'

const INITIAL_STATE = {
    theme: THEMES.LIGHT,
}

export const ThemeContext = createContext(INITIAL_STATE)

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(INITIAL_STATE.theme)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
