import { useState } from 'react'

import { Tab } from '../tab/component'

import styles from './styles.module.scss'

export const Tabs = ({ tabs, onTabSelect }) => {
    const [active, setActive] = useState(0)

    return (
        <div className={styles.tabs}>
            {tabs.map((tab, index) => {

                if (typeof tab === 'string') {
                    tab = {
                        id: index,
                        label: tab
                    }
                }

                const id = tab.id || index

                return (
                    <Tab
                        key={id}
                        label={tab.label}
                        active={active === id}
                        onSelect={() => {
                            if (onTabSelect) {
                                onTabSelect(id)
                            }
                            setActive(id)
                        }}
                    />
                )
            })}
        </div>
    )
}
