import { AmountField } from '../amount-field/component'

export const MenuItem = ({ name }) => (
    <div>
        <span>{name}</span>
        <AmountField />
    </div>
)
