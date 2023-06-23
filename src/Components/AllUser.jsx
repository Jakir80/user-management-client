import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const AllUser = () => {
    const [usres, SetUser] = useState([])
    useEffect(() => {
        fetch('https://assignmnet-skdh.vercel.app/alluser')
            .then(res => res.json())
            .then(data => SetUser(data))
    }, [])

    const handledelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "Are you sure want to delete this ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignmnet-skdh.vercel.app/delete/${id}`, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json"
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const remaining = usres.filter(user => user._id != id);
                        SetUser(remaining)
                    })
            }
        })
    }



    return (
        <div className='m-auto mt-20 mb-24'>
            <div className="overflow-x-auto">
                <table className="table">
                
                    <thead>
                        <tr>
                            <th>Sl No</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Mobile</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            usres.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>   <button className=' p-2 text-3xl font-semibold bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-4 rounded-md mx-auto'>
                                        <Link to={`/updateUser/${user._id}`}>Update</Link>
                                    </button></td>
                                    <td> <button onClick={() => handledelete(user._id)} className='p-2 text-3xl font-semibold bg-gradient-to-r from-red-500 to-yellow-500 text-white py-2 px-4 rounded-md mx-auto'>
                                        Delete
                                    </button></td>
                                </tr>
                            )
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllUser;