import { createSlice } from '@reduxjs/toolkit'

import { REQUEST_STATUSES } from '../../../constants/request-statuses'
import { getUsers } from './thunks/get-users'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        entities: {},
        ids: [],
        status: REQUEST_STATUSES.IDLE,
        error: null,
    },
    extraReducers: builder => {
        builder
            .addCase(getUsers.fulfilled, (state, { payload }) => {
                state.entities = payload.reduce((entities, user) => {
                    entities[user.id] = user

                    return entities
                }, {})
                state.ids = payload.map(user => user.id)
                state.status = REQUEST_STATUSES.SUCCESS
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.error = action.payload
                state.status = REQUEST_STATUSES.ERROR
            })
            .addCase(getUsers.pending, state => {
                state.status = REQUEST_STATUSES.PENDING
            })
    }
})
