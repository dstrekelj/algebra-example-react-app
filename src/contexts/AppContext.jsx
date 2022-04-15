import React, { useState } from "react";

export const AppContext = React.createContext();
export const AppConsumer = AppContext.Consumer;

export function AppProvider(props) {
  const [state, setState] = useState(props.value);

  const value = {
    state: state,
    setState: setState,
    setId: (id) => setState((state) => ({ ...state, id: id })),
  };

  return <AppContext.Provider value={value}>{props.children}</AppContext.Provider>;
}
