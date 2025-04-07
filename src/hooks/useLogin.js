import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useState } from "react";
import { useGlobalContext } from "./useGlobalContext";
import toast from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore";

export function useLogin() {
  const { dispatch } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const login = async (email, password) => {
    setIsPending(true)
    try {
      const req = await signInWithEmailAndPassword(auth, email, password);
      const user = req.user;
      const useRef = doc(db, "users", user.uid);
      await updateDoc(
        useRef,
        {
          online:true,
        }
      );

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

