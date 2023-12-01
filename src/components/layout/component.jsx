import { Header } from '../header/component'
import { Footer } from '../footer/component'

import styles from './styles.module.scss'

export const Layout = ({ children }) => (
    <div className={styles.layout}>
        <Header className={styles.header} />
        <main>{children}</main>
        <Footer />
    </div>
)
