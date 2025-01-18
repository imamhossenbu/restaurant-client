import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../components/SectionTitle/SEctionTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { FaEdit, FaTrash } from "react-icons/fa";
import useMenu from "../../Hooks/useMenu";
import { Link, NavLink, useNavigate } from "react-router-dom";



const ManageAllItems = () => {
    const axiosSecure = useAxiosSecure();
    const [menus, isPending, refetch] = useMenu();
    const navigate = useNavigate();

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
                axiosSecure.delete(`/menu/${id}`)
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
            <SectionTitle subheading={"Hurry Up!"} heading={"Manage all items"}></SectionTitle>
            <div className="max-w-3xl mx-auto bg-white min-h-screen p-4 rounded-lg shadow-md">
                <h1 className="text-2xl font-bold">Total Items: {menus.length}</h1>
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
                                <th className='p-3'>Action</th>
                            </tr>
                        </thead>
                        {/* Table Body */}
                        <tbody>
                            {menus.map((item, index) => {
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
                                        <td className="pl-6 text-amber-600">
                                            <Link to={`/dashboard/update-items/${item._id}`} state={{ item }} className="btn btn-ghost btn-xs text-yellow-500 hover:text-yellow-700">
                                                <FaEdit size={18} />
                                            </Link>
                                        </td>
                                        <td className='p-3'>
                                            <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-xs text-red-500 hover:text-red-700">
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

export default ManageAllItems;