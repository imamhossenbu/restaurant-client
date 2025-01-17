import React, { useContext } from 'react';
import useAdmin from '../Hooks/useAdmin';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isPending] = useAdmin();
    const location = useLocation();
    console.log(isAdmin);

    if (loading || isPending) {
        return (
            <div className="fixed inset-0 bg-gray-100 flex justify-center items-center z-50">
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
                    <div className="absolute inset-2 border-4 border-t-transparent border-blue-300 rounded-full animate-spin-slower"></div>
                </div>
            </div>
        );
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;