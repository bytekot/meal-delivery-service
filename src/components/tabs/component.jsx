import { Tab } from '../tab/component'

import styles from './styles.module.scss'

export const Tabs = ({ tabs, activeTab, onTabSelect }) => {
    return (
        <div className={styles.tabs}>
            {tabs.map((text, index) => {
                return (
                    <Tab
                        key={index}
                        active={activeTab === index}
                        onSelect={() => onTabSelect(index)}
                    >
                        {text}
                    </Tab>
                )
            })}
        </div>
    )
}
