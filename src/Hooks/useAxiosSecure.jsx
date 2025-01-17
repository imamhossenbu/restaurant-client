import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
import { useContext } from 'react';



const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000'
})
const useAxiosSecure = () => {
    const navigate=useNavigate();
    const {logOut}=useContext(AuthContext);

    axiosSecure.interceptors.request.use(
        config => {
            const token = localStorage.getItem('token');
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }
            return config;
        }, 
        error => {
            return Promise.reject(error);
        });


        axiosSecure.interceptors.response.use(response => {
            return response;
        }, async(error) => {
            const status = error.response.status;
            if (status === 401 || status === 403) {
                await logOut();
                navigate('/login');
            }
            return Promise.reject(error);
        });

    return axiosSecure;
};

export default useAxiosSecure;