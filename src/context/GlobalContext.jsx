import { createContext, useReducer } from "react";

export const GlobalContext = createContext();
const initalState = {
  user: null,
  isAuthReady: false,
  recepies: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return { ...state, user: payload };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    case "AUTH_READY":
      return { ...state, isAuthReady: true };
    case "CREATE_RECEPIEC":
      return { ...state, recepies: payload };
    default:
      return state;
  }
};

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
