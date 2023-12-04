import { createContext, useState, useMemo } from 'react'
import { THEMES } from '../constants/components'

const INITIAL_STATE = {
    theme: matchMedia('(prefers-color-scheme: dark)').matches ? THEMES.DARK : THEMES.LIGHT,
}

export const ThemeContext = createContext(INITIAL_STATE)

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(INITIAL_STATE.theme)

    const value = useMemo(() => ({ theme, setTheme }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
