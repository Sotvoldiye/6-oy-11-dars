import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase/config";
import { useState } from "react";
import toast from "react-hot-toast";
import { useGlobalContext } from "./useGlobalContext";
import Login from "../pages/Login";

export function useRegister() {
  const { dispatch } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const [data, setData] = useState(null);

  const register = async (displayName, email, password) => {
    try {
      setIsPending(true);
      const req = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(auth.currentUser, {
        displayName,
        photoURL: `https://api.dicebear.com/9.x/adventurer/svg?seed=${displayName}`,
      });
      const user = req.user;
      toast.success(`welcome ${displayName}`);
      dispatch({ type: "Login", payload: user });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };
  return { isPending, data, register };
}
