import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'

import { User } from './component'

import { selectUserById } from '../../store/entities/user/selectors'
import { getUsers } from '../../store/entities/user/thunks/get-users'

export const UserContainer = ({ userId }) => {
    const user = useSelector(state => selectUserById(state, userId))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return <User user={user} />
}
