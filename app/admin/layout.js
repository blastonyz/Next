'use client'

import { useAuthContext } from "../components/context/AuthContext";
import LoginForm from "../components/auth/LoginForm";
                              //,login  
const AdminLayout = ({children}) => {
    const {user} = useAuthContext()
    console.log('user',user);
    if(!user.logged){
        return <LoginForm/>
    }
    return <>{children}</>
}

    export default AdminLayout      

    /*
const AdminLayout = ({children, login}) => {
    const {user} = useAuthContext()
    console.log('user',user);
    return(
        <>
        {user.logged ? children : login}
        </>
    )}
*/