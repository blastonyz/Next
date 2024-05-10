'use client'
import { useAuthContext } from "../context/AuthContext";
import { Boton } from "../ui/Boton";

const LogoutButon = () =>{
    const {logout} = useAuthContext()

    return <Boton onClick = {logout} className="bg-organse-450">Cerrar Sesion</Boton>
}

export default LogoutButon