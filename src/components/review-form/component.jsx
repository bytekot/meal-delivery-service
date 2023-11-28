import { useReducer } from 'react'

import { AmountField } from '../amount-field/component'

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
            <strong>Leave a review</strong>
            <div>
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    type='text'
                    value={formValues.name}
                    onChange={event => dispatch({ type: 'setName', payload: event.target.value })}
                />
            </div>
            <div>
                <label htmlFor='text'>Text</label>
                <textarea
                    id='text'
                    value={formValues.text}
                    onChange={event => dispatch({ type: 'setText', payload: event.target.value })}
                />
            </div>
            <div>
                <label htmlFor='rating'>Rating</label>
                <AmountField
                    id='rating'
                    value={formValues.rating}
                    min={1}
                    step={0.5} 
                    onChange={value => dispatch({ type: 'setRating', payload: value })}
                />
            </div>
        </div>
    )
}
