import { useState } from 'react'

import { Tab } from '../tab/component'

import styles from './styles.module.scss'

/**
 * @param {Array} tabs - Array of tab items
 * @param {string|Object} tabs[] - Tab item, either a string label or object 
 * @param {string} tabs[].id - Unique id for the tab 
 * @param {string} tabs[].label - Display label for the tab
 * @param {Function} onTabSelect - Callback when a tab is selected
 *
 * @returns {JSX.Element} Tabs component
 */
export const Tabs = ({ tabs, onTabSelect = () => {} }) => {
    const [active, setActive] = useState(0)

    return (
        <div className={styles.tabs}>
            {tabs.map((tab, index) => {
                const { id, label } = typeof tab !== 'object'
                    ? { id: index, label: tab } 
                    : tab

                return (
                    <Tab
                        key={id}
                        label={label}
                        active={active === id}
                        onSelect={() => {
                            onTabSelect(id)
                            setActive(id)
                        }}
                    />
                )
            })}
        </div>
    )
}
