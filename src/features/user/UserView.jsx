import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers, selectAllUsers } from './UserSlice'

export const Userview = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectAllUsers)

    useEffect(() => {
        // if (user.state === false)
            dispatch(fetchUsers())

        console.log(user)
    }, [] /* [user.state, dispatch] */)

    return (
        <div>
        {
            user && console.log(user)
            // user.users.map(elem => <div>{elem}</div>)
        }
        </div>
    )
}