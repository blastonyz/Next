'use client'
import { auth } from "@/app/firebase/firebaseConfig"
import { useContext,createContext,useState,useEffect } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth"

const AuthContext = createContext()

export const useAuthContext = () =>{
  const context = useContext(AuthContext);
  if(!context){
    throw new Error('error de contexto')
  }
  return context
} 

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
      logged: false,
      email: null,
      uid: null
    });
  
    const registerUser = async (values) => {
      try {
       await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
      
      } catch (error) {
        console.error("Error al registrar al usuario:", error);
      }
    };

    const loginUser = async (values) => {
        try{
         await signInWithEmailAndPassword(auth, values.email,values.password)
        
        }catch(error){
          console.error(error)
        }finally{
       console.log('user:', user);
      }
    }

    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        console.log('user: ',user);

        if(user){
          setUser({
            logged:true,
            email:user.email,
            uid: user.uid
          })
        }
      })
    },[])
  
    return (
      <AuthContext.Provider value={{ user, registerUser, loginUser }}>
        {children}
      </AuthContext.Provider>
    );
  };

