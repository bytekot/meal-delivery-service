import { Header } from '../header/component'
import { Footer } from '../footer/component'

import styles from './styles.module.scss'

import classNames from 'classnames'

export const Layout = ({ className, children }) => (
    <div className={classNames(styles.layout, className)}>
        <Header className={styles.header} />
        <main>{children}</main>
        <Footer />
    </div>
)
