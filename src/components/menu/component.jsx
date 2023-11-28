import { MenuItem } from '../menu-item/component'

export const Menu = ({ items }) => (
    <div>
        <h3>Menu</h3>
        <ul>
            {items.map(({ id, name }) =>
                <li key={id}>
                    <MenuItem name={name} />
                </li>
            )}
        </ul>
    </div>
)
