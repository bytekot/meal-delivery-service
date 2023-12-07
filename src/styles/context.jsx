import { createContext, useState, useMemo } from 'react'
import { THEMES } from '../constants/components'

const INITIAL_STATE = {
    // theme: matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT,
    theme: THEMES.LIGHT,
}

export const ThemeContext = createContext(INITIAL_STATE)

export const ThemeProvider = ({ children, defaultTheme = INITIAL_STATE.theme }) => {
    const [theme, setTheme] = useState(defaultTheme)

    const toggleTheme = () => setTheme(theme =>
        theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
    )
    const value = useMemo(() => ({ theme, toggleTheme }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
