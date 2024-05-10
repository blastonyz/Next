'use client'

import { useAuthContext } from "../components/context/AuthContext";

const AdminLayout = ({children, login}) => {
    const {user} = useAuthContext()
    console.log('user',user);
    return(
        <>
        {user.logged ? children : login}
        </>
    )}

    export default AdminLayout      