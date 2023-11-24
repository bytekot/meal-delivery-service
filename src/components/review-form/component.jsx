import { useReducer } from 'react'
import { AmountField } from '../amount-field/component'

const DEFAULT_FORM_VALUES = {
    title: '',
    text: '',
    rating: 5,
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'setTitle':
            return { ...state, title: payload }
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
        <div>
            <strong>Leave a review</strong>
            <div>
                <label htmlFor='title'>Title</label>
                <input
                    id='title'
                    type='text'
                    value={formValues.title}
                    onChange={event => dispatch({ type: 'setTitle', payload: event.target.value })}
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
