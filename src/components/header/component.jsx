import { useContext } from 'react'

import { ThemeContext } from '../../styles/context'
import { Button } from '../button/component'

import { BUTTON_TYPES, THEMES } from '../../constants/components'

import styles from './styles.module.scss'

import classNames from 'classnames'

export const Header = ({ className }) => {
    const { theme, setTheme } = useContext(ThemeContext)

    const toggleTheme = () => setTheme(theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)

    return (
        <div className={classNames(styles.header, className)}>
            <Button
                className={styles.button}
                type={BUTTON_TYPES.SECONDARY}
                onClick={toggleTheme}
            >
                Toggle theme
            </Button>
            <Button className={styles.button}>Order</Button>
        </div>
    )
}
