
import { useEffect } from 'react';
import { useState } from 'react';

export const useRole = (email) => {
    const [myRole,setMyRole] = useState('')
    const [roleLoading,setRoleLoading] = useState(true)
    useEffect(()=>{
        if(email){
            fetch(`${process.env.REACT_APP_api}/user/${email}`)
            .then(res=>res.json())
            .then(data=>{
                setMyRole(data?.role)
                setRoleLoading(false)
            })
        }
    },[email])
    return {myRole,roleLoading}
};
