export const RestaurantNames = ({ names }) => {
    return (
        <div>
            {names.map((name, index) => <span key={index}>{name}</span>)}
        </div>
    )
}
