import { useEffect, useState } from "react";
import useAxiosPublic from "./useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const useMenu = () => {
    const axiosSecurePublic=useAxiosPublic();

    // useEffect(() => {
    //     axiosSecurePublic.get('/menu')
    //         .then(res => {
    //             setMenus(res.data);
    //             setLoading(false);
    //         })
    // }, [])
    // return [menus, loading]

    const {data:menus=[],isPending,refetch}=useQuery({
        queryKey:['menus'],
        queryFn:async()=>{
            const res=await axiosSecurePublic.get('/menu');
            return res.data;
        }
    })
    return [menus,isPending,refetch]
};

export default useMenu;