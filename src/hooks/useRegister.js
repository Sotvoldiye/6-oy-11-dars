import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useState } from "react";
import toast from "react-hot-toast";
import { useGlobalContext } from "./useGlobalContext";
import { doc, setDoc } from "firebase/firestore"; 


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
      await setDoc(doc(db, "users", user.uid), {
      displayName: user.displayName,  
      photoURL: user.photoURL ,
      online : true
      });

      toast.success(`welcome ${displayName}`);
      dispatch({ type: "LOGIN",  user });
      setData(user)
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };
  return { isPending, data, register };
}
