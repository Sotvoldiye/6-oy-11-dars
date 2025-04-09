import { doc, setDoc } from "firebase/firestore";
import { useGlobalContext } from "./useGlobalContext";
import { useState } from "react";
import toast from "react-hot-toast";
import { db } from "../firebase/config";

export function useCreateRecepice() {
  const { dispatch } = useGlobalContext();
  const [recepies, setRecepice] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const recepiesed = async (title, cookingTime, description) => {
    try {
      setIsPending(true);

      const recepie = {
        uid: `${Date.now()}`, 
        title,
        cookingTime,
        description,
      };

      await setDoc(doc(db, "recepies", recepie.uid), {
        title: recepie.title,
        cookingTime: recepie.cookingTime,
        description: recepie.description,
      });

      toast.success(`Add ${title} taomi`);
      dispatch({ type: "CREATE_RECEPIEC", payload: recepie });
      setRecepice(recepie);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsPending(false);
    }
  };

  return { isPending, recepies, recepiesed };
}
