import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/config";
import { useGlobalContext } from "./useGlobalContext";
import { useState } from "react";
import toast from "react-hot-toast";
import { doc, updateDoc } from "firebase/firestore";
import { useFirestore } from "./useFirestore";

export function useLogout() {
  const { dispatch, user } = useGlobalContext();
  const [isPending, setIsPending] = useState(false);
  const { updateDocument } = useFirestore("users");
  const logout = async () => {
    try {
      const useRef = doc(db, "users", user.uid);
      updateDocument(user.uid, {
        online: false,
      });
     
      setIsPending(true);
      await signOut(auth);
      dispatch({ type: "LOGOUT" });
      toast.success("See you soon");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { logout, isPending };
}
