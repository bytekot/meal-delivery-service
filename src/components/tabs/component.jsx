import { useState } from 'react'

import { Tab } from '../tab/component'

import styles from './styles.module.scss'

export const Tabs = ({ tabs, onTabSelect }) => {
    const [active, setActive] = useState(0)

    return (
        <div className={styles.tabs}>
            {tabs.map((label, index) =>
                <Tab
                    key={index}
                    label={label}
                    active={active === index}
                    onSelect={() => {
                        if (onTabSelect) {
                            onTabSelect(index)
                        }
                        setActive(index)
                    }}
                />
            )}
        </div>
    )
}
