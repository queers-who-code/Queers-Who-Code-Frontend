import React, { useState } from 'react';
import * as actions from '../actions';

export const Context = React.createContext(null);

export const ContextProvider = ({ initialState, children }) => {
  const [state, setState] = useState(initialState);

  const providerActions = {
    setState: values =>
      setState(prevState => {
        return { ...prevState, ...values };
      }),
    ...actions,
  };
  return (
    <Context.Provider
      value={{
        state: { ...state },
        ...providerActions,
      }}
    >
      {children}
    </Context.Provider>
  );
};
