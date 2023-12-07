import { useContext } from 'react'

import { ThemeContext, ThemeProvider } from '../../styles/context'
import { Button } from '../button/component'

import { BUTTON_TYPES, THEMES } from '../../constants/components'

import styles from './styles.module.scss'

import classNames from 'classnames'

export const Header = ({ className }) => {
    const { toggleTheme } = useContext(ThemeContext)

    return (
        <ThemeProvider>
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
        </ThemeProvider>
    )
}
