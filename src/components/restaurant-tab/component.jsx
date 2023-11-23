export const RestaurantTab = ({ restaurant, onSelect }) => {
    const { id, name } = restaurant

    return (
        <button id={id} onClick={onSelect}>{name}</button>
    )
}
