import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import {router} from './components/Routes/Routes'

function App() {
  return (
    <div className='dark:bg-slate-800'>
      <RouterProvider router={router}/>
      <Toaster />
     
    </div>
  );
}

export default App;
