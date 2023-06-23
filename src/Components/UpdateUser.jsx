
import { useForm } from 'react-hook-form';
import { Link, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateUser = () => {
    const users = useLoaderData();
    const { name, email, phone, _id } = users;
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (info, event) => {
        event.preventDefault();

        if (_id) {
            fetch(`http://localhost:5000/updateUser/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(info),
            })
                .then((res) => res.json())
                .then((data) => {
                    if (data.modifiedCount) {
                        toast("Information updated successfully")

                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        } else {
            console.log('_id is null or undefined');
        }
    };
    return (
        <div>
            <div className='text-center mt-2.5'>
                <button className='p-6 text-3xl font-semibold bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-4 rounded-md mx-auto'><Link to='/'>Back To Home</Link></button>
            </div>
            <div className="flex justify-center items-center mt-32">
                <div className="p-6 bg-gradient-to-br from-red-500 to-yellow-500  rounded-lg shadow-lg">
                    <form className="mx-auto" onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-4">
                            <div className="grid grid-cols-2 m-auto gap-[6rem]">
                                <div>
                                    <label className="text-gray-700 font-medium">Name</label>
                                    <input
                                        type="text"
                                        defaultValue={name}
                                        {...register('name', { required: true })}
                                        className="w-full border border-gray-400 rounded px-3 py-2"
                                        placeholder="Enter product Product category"
                                    />
                                    {errors.name && (
                                        <span className="text-red-500">Name is required</span>
                                    )}
                                </div>
                                <div>
                                    <label className="text-gray-700 font-medium">Email</label>
                                    <input
                                        type="text"
                                        defaultValue={email}
                                        {...register('email', {
                                            required: true,
                                            pattern: /^\S+@\S+$/i,
                                        })}
                                        className="w-full border border-gray-400 rounded px-3 py-2"
                                        placeholder="Enter email"
                                        name="email"
                                    />
                                    {errors.email?.type === 'required' && (
                                        <span className="text-red-500">Email is required</span>
                                    )}
                                    {errors.email?.type === 'pattern' && (
                                        <span className="text-red-500">Invalid email format</span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="p-4 mb-4">
                                <div>
                                    <label className="text-gray-700 font-medium">Phone Number</label>
                                    <input
                                        type="text"
                                        defaultValue={phone}
                                        {...register('phone', {
                                            required: true,
                                            pattern: /^[0-9]*$/,
                                        })}
                                        className="w-full border border-gray-400 rounded px-[10rem] py-2"
                                        placeholder="Enter phone number"
                                        name="phone"
                                    />
                                    {errors.phone?.type === 'required' && (
                                        <span className="text-red-500">Phone number is required</span>
                                    )}
                                    {errors.phone?.type === 'pattern' && (
                                        <span className="text-red-500">
                                            Invalid phone number format (numbers only)
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                        <button className="block w-full bg-gradient-to-br from-blue-500 to-green-500 text-white px-4 py-2 rounded hover:bg-gradient-to-br hover:from-blue-600 hover:to-green-600">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateUser;
