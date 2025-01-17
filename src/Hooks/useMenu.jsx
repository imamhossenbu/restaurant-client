import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {
    const axiosSecurePublic=useAxiosPublic();
    const [menus, setMenus] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axiosSecurePublic.get('/menu')
            .then(res => {
                setMenus(res.data);
                setLoading(false);
            })
    }, [])
    return [menus, loading]

};

export default useMenu;