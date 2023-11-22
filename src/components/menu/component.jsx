import { MenuItem } from '../menu-item/component'

export const Menu = ({ items }) => (
    <div>
        <h3>Menu</h3>
        <ul>
            {items.map(({ id, name }) =>
                <li>
                    <MenuItem
                        key={id}
                        name={name}
                    />
                </li>
            )}
        </ul>
    </div>
)
