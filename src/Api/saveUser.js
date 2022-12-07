export const saveUser=async(user)=>{
    const res = await fetch(`${process.env.REACT_APP_api}/user?email=${user?.email}`,{
        method:'put',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(user)
    })
    const data = await res.json()
    return data
}