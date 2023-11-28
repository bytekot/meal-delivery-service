import styles from './styles.module.scss'

export const Reviews = ({ items }) => (
    <div className={styles.reviews}>
        <h3>Reviews</h3>
        <ul>
            {items.map(({ id, text }) =>
                <li key={id}>{text}</li>
            )}
        </ul>
    </div>
)
