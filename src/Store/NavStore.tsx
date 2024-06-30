import React, { createContext, useReducer } from "react";


interface NavContextType {
  state: string;
  dispatch: React.Dispatch<any>;
}

const NavContext = createContext<NavContextType | undefined>(undefined);

const initialpath = "/";

const NavReducer = (state: string, action: any) => {
  switch (action.type) {
    case "NAV":
      return action.payload;
    default:
      return state;
  }
};

function NavStore({ children }: React.PropsWithChildren<{}>) {
  const [state, dispatch] = useReducer(NavReducer, initialpath);

  return (
    <NavContext.Provider value={{ state, dispatch }}>
      {children}
    </NavContext.Provider>
  );
}

export { NavStore, NavContext };
