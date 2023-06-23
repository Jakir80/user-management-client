import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CreateUser from './Components/CreateUser';
import Main from './Components/Main';
import UpdateUser from './Components/UpdateUser';
import Home from './Home';
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children: [
      {
        path: '/',
        element:<Main></Main>
      },
      {
        path:'/createuser',
        element:<CreateUser></CreateUser>
      },
      {
        path:'/updateUser/:id',
        element:<UpdateUser></UpdateUser>,
        loader:({params})=>fetch(`http://localhost:5000/update/${params.id}`)
      }
    ],    
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <div className='container m-auto'>
      <RouterProvider router={router}></RouterProvider>
      <ToastContainer></ToastContainer>
    </div>
  </React.StrictMode>,
)
