import { useState } from 'react'

import { Tab } from '../tab/component'

import styles from './styles.module.scss'

export const Tabs = ({ tabs, onTabSelect }) => {
    const [active, setActive] = useState(0)

    return (
        <div className={styles.tabs}>
            {tabs.map((tab, index) => {
                const tabData = typeof tab !== 'object' ? { id: index, label: tab } : tab
                const { id, label } = tabData

                return (
                    <Tab
                        key={id}
                        label={label}
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
