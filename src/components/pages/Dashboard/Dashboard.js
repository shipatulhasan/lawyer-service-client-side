import { format } from 'date-fns';
import React, {useContext,useState,useEffect} from 'react';
import { Helmet } from 'react-helmet-async';
import {AuthContext} from '../../AuthProvider/AuthProvider'


const Dashboard = () => {

    const {user} = useContext(AuthContext)
    const date = new Date()
    const [value, setValue] = useState(date);

    useEffect(() => {
      const interval = setInterval(() => setValue(new Date()), 1000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);

    return (
        <div className='space-y-5 pl-5'>
            <Helmet>
        <title>Dashboard - Family Law Attorney</title>
      </Helmet>
            <div className='flex justify-between items-end border-b-4 t border-black py-2'>
                <div>
                <h2 className='text-khaki text-lg md:text-2xl uppercase font-bold'>
                    {format(date,'cccc')}
                </h2>
                <h2 className='text-slate-900 text-xl md:text-3xl uppercase font-bold'>
                    {format(date,'PP')}
                </h2>
                </div>
                <div >
             
                <h2 className='text-khaki text-xl md:text-3xl uppercase font-bold'>
                    {format(value,'pp')}
                </h2>
                </div>
                
            </div>
             <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold uppercase'>
                        <span className='text-khaki '>Welcome </span>{user.displayName.split(' ')[0]}
                        </h2>
        </div>
    );
};

export default Dashboard;