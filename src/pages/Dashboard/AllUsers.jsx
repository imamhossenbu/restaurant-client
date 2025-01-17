import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import { FaUser } from 'react-icons/fa6';
import { useQuery } from '@tanstack/react-query';
import { FaTrash } from 'react-icons/fa';
import SectionTitle from '../../components/SectionTitle/SEctionTitle';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();

    const { refetch, data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });


    const handleMakeAdmin = (user) => {
        console.log(user);
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        title: "Updated!",
                        text: "User is now an admin",
                        icon: "success"
                    });

                }
            })
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            refetch();
                        }
                    })

            }
        });
    }

    return (
        <div>
            <SectionTitle subheading={'How Many??'} heading={'manage all users'}></SectionTitle>
            <div className='w-full md:w-[90%] mx-auto bg-white min-h-screen p-4 rounded-lg shadow-md'>
                <h1 className='text-xl font-bold uppercase'>Total Users : {users.length}</h1>
                <div className="overflow-x-auto my-4">
                    <table className="table-auto w-full text-left border-collapse">
                        {/* Table Head */}
                        <thead className='bg-[#D1A054] text-white '>
                            <tr className='uppercase'>
                                <th className='p-3'>

                                </th>
                                <th className='p-3'>Name</th>
                                <th className='p-3'>Email</th>
                                <th className='p-3'>Role</th>
                                <th className='p-3'>Action</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {users.map((user, index) => {
                                return (
                                    <tr key={user._id} className='border-b hover:bg-gray-100'>
                                        <td className='p-3 font-bold'>{index + 1}</td>  {/* Increasing number here */}

                                        <td className='p-3'>{user.name}</td>
                                        <td className='p-3'>{user.email}</td>
                                        <td className='p-3'>
                                            {user.role === 'admin' ? (
                                                'Admin'
                                            ) : (
                                                <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost btn-xs text-green-500 hover:text-green-700">
                                                    <FaUser size={18}></FaUser>
                                                </button>
                                            )}
                                        </td>

                                        <td className='p-3'>
                                            <button onClick={() => handleDelete(user._id)} className="btn btn-ghost btn-xs text-red-500 hover:text-red-700">
                                                <FaTrash size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;