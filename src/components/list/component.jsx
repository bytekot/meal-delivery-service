export const List = ({ title = '', items }) => {
    return (
        <div>
            <h3>{title}</h3>
            <ul>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </div>
    )
}
