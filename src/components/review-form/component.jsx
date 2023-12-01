import { useReducer } from 'react'

import { AmountField } from '../amount-field/component'
import { TextField } from '../text-field/component'
import { TextArea } from '../text-area/component'
import { Button } from '../button/component'

import { BUTTON_TYPES } from '../../constants/components'

import styles from './styles.module.scss'

const DEFAULT_FORM_VALUES = {
    name: '',
    text: '',
    rating: 5,
}

const RATING_STEP = 0.5;

const reducer = (state, action) => {
    const { type, payload } = action

    switch (type) {
        case 'setName':
            return { ...state, name: payload }
        case 'setText':
            return { ...state, text: payload }
        case 'increaseRating':
            return { ...state, rating: state.rating + RATING_STEP }
        case 'decreaseRating':
            return { ...state, rating: state.rating - RATING_STEP }
        default:
            return state
    }
}

export const ReviewForm = () => {
    const [formValues, dispatch] = useReducer(reducer, DEFAULT_FORM_VALUES)

    return (
        <div className={styles.reviewForm}>
            <span>Write a review:</span>
            <TextField
                id='name'
                emptyText="What's your name?"
                className={styles.name}
                value={formValues.name}
                onChange={event => dispatch({type: 'setName', payload: event.target.value })}
            />
            <TextArea
                id='text'
                emptyText='How do you like the restaurant?'
                className={styles.text}
                value={formValues.text}
                onChange={event => dispatch({ type: 'setText', payload: event.target.value })}
            />
            <AmountField
                id='rating'
                label='Rating'
                value={formValues.rating}
                min={1}
                onPlus={() => dispatch({ type: 'increaseRating' })}
                onMinus={() => dispatch({ type: 'decreaseRating' })}
            />
            <Button
                className={styles.publishButton}
                type={BUTTON_TYPES.PRIMARY}
            >
                Publish
            </Button>
        </div>
    )
}
