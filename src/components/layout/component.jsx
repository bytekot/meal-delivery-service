import classNames from 'classnames'

import { ThemeProvider } from '../../styles/context'
import { Header } from '../header/component'
import { Footer } from '../footer/component'

import styles from './styles.module.scss'

export const Layout = ({ className, children }) => (
    <ThemeProvider>
        <div className={classNames(styles.layout, className)}>
            <Header className={styles.header} />
            <main>{children}</main>
            <Footer />
        </div>
    </ThemeProvider>
)
