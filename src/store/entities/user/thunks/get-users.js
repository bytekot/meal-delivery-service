import { createAsyncThunk } from '@reduxjs/toolkit'
import { ENDPOINTS } from '../../../../constants/endpoints'
import { selectUserIds } from '../selectors'

export const getUsers = createAsyncThunk('user/getUsers',
    async (_, { rejectWithValue }) => {
        const response = await fetch(ENDPOINTS.users.all)
        const users = await response.json()

        if (!users?.length) {
            rejectWithValue('No users found.')
        }

        return users
    },
    {
        condition: (_, { getState }) => !selectUserIds(getState()).length,
    }
)
