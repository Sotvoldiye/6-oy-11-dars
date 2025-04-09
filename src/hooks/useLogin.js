import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import toast from "react-hot-toast";
import { useFirestore } from "./useFirestore";

export function useLogin() {
  const { dispatch } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);
  const {updateDocument} = useFirestore()
  const login = async (email, password) => {
    setIsPending(true)
    try {
      const req = await signInWithEmailAndPassword(auth, email, password);
      const user = req.user;
      updateDocument(user.uid, {
        online: true,
      })
      toast.success(`welcome back ${user.displayName || "Users"}`);
      dispatch({ type: "LOGIN", payload: user });
      setData(user);
    } catch (error) {
      toast.error(error.message);
      console.log(error.message);
    } finally {
      setIsPending(false);
    }
  };
  return { isPending, data, login };
}

