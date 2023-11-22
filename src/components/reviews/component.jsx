export const Reviews = ({ items }) => (
    <div>
        <h3>Reviews</h3>
        <ul>
            {items.map(({ id, text }) =>
                <li key={id}>{text}</li>
            )}
        </ul>
    </div>
)
