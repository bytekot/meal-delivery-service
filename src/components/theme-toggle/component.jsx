import { useContext } from 'react'

import { ThemeContext } from '../../styles/context'
import { Toggle } from '../toggle/component'

import { THEMES, TOGGLE_TYPES } from '../../constants/components'

import styles from './styles.module.scss'

const THEME_LABELS = {
    [THEMES.LIGHT]: '☀',
    [THEMES.DARK]: '☾',
}

export const ThemeToggle = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const isDarkThemeEnabled = theme === THEMES.DARK

    return (
        <Toggle
            label={isDarkThemeEnabled ? THEME_LABELS[THEMES.DARK] : THEME_LABELS[THEMES.LIGHT]}
            className={styles.themeToggle}
            type={TOGGLE_TYPES.ALT}
            toggled={isDarkThemeEnabled}
            onClick={toggleTheme}
            {...props}
        />
    )
}
