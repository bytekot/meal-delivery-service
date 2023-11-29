import { useReducer } from 'react'

import { AmountField } from '../amount-field/component'
import { TextField } from '../text-field/component'
import { TextArea } from '../text-area/component'

import styles from './styles.module.scss'

const DEFAULT_FORM_VALUES = {
    name: '',
    text: '',
    rating: 5,
}

const reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'setName':
            return { ...state, name: payload }
        case 'setText':
            return { ...state, text: payload }
        case 'setRating':
            return { ...state, rating: payload }
        default:
            return state
    }
}

export const ReviewForm = () => {
    const [formValues, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUES)

    return (
        <div className={styles.reviewForm}>
            <h4>Leave a review</h4>
            <TextField
                id='name'
                label='Name'
                value={formValues.name}
                onChange={event => dispatch({ type: 'setName', payload: event.target.value })}
            />
            <TextArea
                id='text'
                label='Text'
                value={formValues.text}
                onChange={event => dispatch({ type: 'setText', payload: event.target.value })}
            />
            <AmountField
                id='rating'
                label='Rating'
                value={formValues.rating}
                min={1}
                step={0.5}
                onChange={value => dispatch({ type: 'setRating', payload: value })}
            />
        </div>
    )
}
