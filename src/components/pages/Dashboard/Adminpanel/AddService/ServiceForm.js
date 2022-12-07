import React from 'react';
import toast from 'react-hot-toast';

const ServiceForm = ({serviceInfo}) => {
    const {service,setService} = serviceInfo


    const handleSubmit=(e)=>{
        e.preventDefault()
       

        fetch('https://lawyer-server-omega.vercel.app/service',{
            method:'post',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(service)
        })
        .then(res=>res.json())
        .then(data=>{
            setService(data)
            e.target.reset()
            toast.success('Service successfully added')
        })
    }

    const handleInput=(e)=>{
        const field = e.target.name
        const value = e.target.value
        const newService = {...service}
        newService[field] = value
        setService(newService)
      
    }


    return (
        <div>
            <h1 className="text-4xl font-bold text-black uppercase mb-4">
            Add Your Service
          </h1>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 ng-untouched ng-pristine ng-valid"
            >
              <div className="space-y-1 text-base mt-8 border border-khaki">
             
                <input
                  type="text"
                  name="title"
                  onChange={handleInput}
                  required
                  placeholder="service title..."
                  className="w-full px-4 py-3 bg-slate-100 bg-opacity-20 focus:outline-none text-black dark:text-white"
                />
              </div>
             
              <div className="space-y-1 text-base border border-khaki">
               
                <input
                  type="text"
                  name="img"
                  onChange={handleInput}
                  placeholder="service photo url"
                  required
                  className="w-full px-4 py-3 bg-slate-100 bg-opacity-20 focus:outline-none text-black dark:text-white"
                />
              </div>
              <div className="space-y-1 text-base border border-khaki">
               
                <textarea
                  type="text"
                  onChange={handleInput}
                  name="description"
                  placeholder="service description"
                  required
                  className='p-5 w-full focus:outline-none'
                ></textarea>
              </div>

              <div className="space-y-1 text-base border border-khaki">
             
             <input
               type="text"
               name="price"
               onChange={handleInput}
               required
               placeholder="service price"
               className="w-full px-4 py-3 bg-slate-100 bg-opacity-20 focus:outline-none text-black dark:text-white"
             />
           </div>
              <div className="space-y-1 text-base border border-khaki">
             
             <input
               type="text"
               name="headline"
               onChange={handleInput}
               required
               placeholder="service headline"
               className="w-full px-4 py-3 bg-slate-100 bg-opacity-20 focus:outline-none text-black dark:text-white"
             />
           </div>
              <div className="space-y-1 text-base border border-khaki">
             
              <textarea
                  type="text"
                  onChange={handleInput}
                  name="details"
                  placeholder="service description"
                  required
                  className='p-5 w-full focus:outline-none text-black dark:text-white'
                ></textarea>
           </div>
            
  
           <button className='border-2 border-khaki px-8 py-2 text-white font-bold tracking-widest uppercase text-xs mt-6 bg-black  hover:bg-khaki '>
                    Add service
                </button>
            </form>
        </div>
    );
};

export default ServiceForm;