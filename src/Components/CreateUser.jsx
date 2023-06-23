
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const CreateUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {

        fetch('https://assignmnet-skdh.vercel.app/adduser', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.insertedId){
                toast('user created successfully')
            }
        })
       
    };

    return (
       <div>
      <div className='text-center mt-2.5'>
      <button className='p-6 text-3xl font-semibold bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-4 rounded-md mx-auto'><Link to='/'>Back To Home</Link></button>
      </div>
         <div className='flex gap-10 justify-around items-center '>
          
          <div>
             
              <img src=" https://i.ibb.co/VxbMz69/Frame.png" alt="" />
          </div>
          <div className=''>
              <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                  <div className="mb-4 ">
                      <label className="inline-block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                          Name
                      </label>
                      <div className='border-2 p-4 rounded-lg mb-2 w-full'>
                          <input
                              type="text"
                              {...register('name', { required: true })}
                              className={`form-input w-full ${errors.name ? 'border-red-500' : 'border-2 p-4 rounded-lg mb-2 w-full'}`}
                              placeholder="Enter your name"
                          />
                      </div>
                      {errors.name && <p className="text-red-500 text-xs mt-1">Name is required</p>}
                  </div>

                  <div className="mb-4">
                      <label className=" text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                          Email
                      </label>
                      <div className='border-2 p-4 rounded-lg mb-2'>
                          <input
                              type="email"
                              {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
                              className={`form-input w-full ${errors.email ? 'border-red-500' : 'border-2 p-4 rounded-lg mb-2'}`}
                              placeholder="Enter your email"
                          />
                      </div>
                      {errors.email && (
                          <p className="text-red-500 text-xs mt-1">
                              {errors.email.type === 'required' ? 'Email is required' : 'Invalid email format'}
                          </p>
                      )}
                  </div>

                  <div className="mb-4">
                      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                          Phone Number
                      </label>
                      <div className='border-2 p-4 rounded-lg mb-2'>
                          <input
                              type="tel"
                              {...register('phone', { required: true, pattern: /^\d+$/ })}
                              className={`form-input w-full ${errors.phone ? 'border-red-500' : 'border-2 p-4 rounded-lg mb-2'}`}
                              placeholder="Enter your phone number"
                          />
                      </div>
                      {errors.phone && (
                          <p className="text-red-500 text-xs mt-1">
                              {errors.phone.type === 'required' ? 'Phone number is required' : 'Invalid phone number format'}
                          </p>
                      )}
                  </div>

                  <div className="text-center">
                      <button type="submit" className="p-6 text-3xl font-semibold bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-4 rounded-md mx-auto">Create User</button>
                  </div>
              </form>
             
          </div>
      </div>
       </div>
    );
};

export default CreateUser;
