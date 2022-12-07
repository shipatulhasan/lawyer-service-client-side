import { useEffect, useState } from 'react';

export const useUserData = (role) => {
    const [users,setUsers] = useState('')
    const [userLoading,setUserLoading] = useState(true)
    const [update,setUpdate] = useState(false)
    useEffect(()=>{
        if(role){
            

            fetch(`${process.env.REACT_APP_api}/user?role=${role}`,{
                headers:{
                    authorization:`Bearar ${localStorage.getItem('my_token')}`
                  }
            })
            .then(res=>res.json())
            .then(data=>{
                setUsers(data)
                setUserLoading(false)
            })
        }
    },[role,update])

    return {users,userLoading,setUpdate,update}
  
};

