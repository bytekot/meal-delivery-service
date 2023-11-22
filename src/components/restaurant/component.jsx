import { List } from '../list/component'

export const Restaurant = ({ restaurant }) => {
    if (!restaurant) {
        return null
    } 

    const { name, menu, reviews } = restaurant

    return (
        <div>
            <h2>{name}</h2>
            <List title='Menu' items={menu.map(item => item.name)} />
            <List title='Reviews' items={reviews.map(item => item.text)} />
        </div>
    )
}
