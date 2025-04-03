import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import toast from "react-hot-toast";
import { useGlobalContext } from "./useGlobalContext";
import Login from "../pages/Login";

export function useLogin() {
  const {disptach}= useGlobalContext()
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const login = async ( email, password) => {
    try {
      setIsPending(true)
      const req = await signInWithEmailAndPassword(auth, email, password)
      const user =req.user
      toast.success(`welcomecome back ${user.displayName}`)
      disptach({type:"Login", payload: user})
      setData(user)
    } catch(error) {
      toast.error(error.message)
      console.log(error.message)
    }finally{
      setIsPending(false)
    }
  };
  return { isPending, data, login };
}
