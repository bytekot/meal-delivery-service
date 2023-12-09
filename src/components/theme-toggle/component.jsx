import { useContext } from 'react'

import { ThemeContext } from '../../styles/context'
import { Toggle } from '../toggle/component'

import { THEMES, TOGGLE_TYPES } from '../../constants/components'

import styles from './styles.module.scss'

export const ThemeToggle = (props) => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    return (
        <Toggle
            className={styles.themeToggle}
            type={TOGGLE_TYPES.ALT}
            toggled={theme === THEMES.DARK}
            onClick={toggleTheme}
            {...props}
        />
    )
}
