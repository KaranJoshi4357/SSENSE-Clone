import React, { useReducer } from "react";

export const AuthContext = React.createContext();

const initValue = {
  isAuth: false,
};
export const appReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        isAuth: true,
      };
    }
    case "LOGOUT_SUCCESS": {
      return { ...state, isAuth: false };
    }
    default:
      return state;
  }
};

export default function AuthContextProvider({ children }) {
  const [state, dispath] = useReducer(appReducer, {
    isAuth: false,
  });

  return (
    <AuthContext.Provider value={[state, dispath]}>
      {children}
    </AuthContext.Provider>
  );
}
