import React from 'react';
import useCart from '../../Hooks/useCart';
import SectionTitle from '../../components/SectionTitle/SEctionTitle';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const MyCart = () => {
    const [cart,refetch] = useCart();
    const axiosSecure = useAxiosSecure();

    const totalPrice = cart.reduce((acc, item) => {
        return acc + item.price;
    }, 0).toFixed(2);

    const handleDelete=(id)=>{
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
                axiosSecure.delete(`/carts/${id}`)
                .then(res=>{
                    if(res.data.deletedCount){
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
        <>
            <SectionTitle className='w-[100%] mx-auto' subheading={'My Cart'} heading={'Wanna add more?'} />
            <div className='w-full md:w-[90%] mx-auto bg-white min-h-screen p-4 rounded-lg shadow-md'>
                <div className='uppercase flex flex-col md:flex-row space-y-2 justify-between items-center mb-4'>
                    <h2 className='text-xl font-semibold'>Total Orders: {cart.length}</h2>
                    <h2 className='text-xl font-semibold'>Total Price: ${totalPrice}</h2>
                    <button className='px-4 py-2 bg-[#D1A054] text-white font-semibold rounded-md uppercase'>
                        Pay
                    </button>
                </div>
                <div className="overflow-x-auto my-4">
                    <table className="table-auto w-full text-left border-collapse">
                        {/* Table Head */}
                        <thead className='bg-[#D1A054] text-white'>
                            <tr className='uppercase'>
                                <th className='p-3'>

                                </th>
                                <th className='p-3'>Item Image</th>
                                <th className='p-3'>Item Name</th>
                                <th className='p-3'>Price</th>
                                <th className='p-3'>Action</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {cart.map((item, index) => {
                                return (
                                    <tr key={item._id} className='border-b hover:bg-gray-100'>
                                        <td className='p-3 font-bold'>{index + 1}</td>  {/* Increasing number here */}

                                        <td className='p-3'>
                                            <div className="flex items-center gap-3">
                                                <div className="mask mask-squircle h-12 w-12 overflow-hidden">
                                                    <img
                                                        src={item.image}
                                                        alt="Item"
                                                        className="object-cover h-full w-full"
                                                    />
                                                </div>
                                            </div>
                                        </td>
                                        <td className='p-3'>{item.name}</td>
                                        <td className='p-3'>${item.price}</td>
                                        <td className='p-3'>
                                            <button onClick={()=>handleDelete(item._id)} className="btn btn-ghost btn-xs text-red-500 hover:text-red-700">
                                                <FaTrash  size={18}/>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>

                    </table>
                </div>
            </div>
        </>
    );
};

export default MyCart;
