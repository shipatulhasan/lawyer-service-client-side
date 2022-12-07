export const saveImage = async(image)=>{
    const formData = new FormData();
    formData.append('image',image)
    const res = await fetch(`https://api.imgbb.com/1/upload?key=${process.env.REACT_APP_imgbb}`,{
        method:'post',
        body:formData
    })
    const data = await res.json()
    return data
}