import React from "react";
import { AppState } from "../types/AppState";
import { Action } from "../types/Action";

const initialState: AppState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")!)
    : null,
};

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case "USER_SIGNIN":
      return { ...state, userInfo: action.payload };
    case "USER_SIGNOUT":
      return {};
    default:
      return state;
  }
}

const defaultDispatch: React.Dispatch<Action> = () => initialState;

const User = React.createContext({
  state: initialState,
  dispatch: defaultDispatch,
});

function UserProvider(props: React.PropsWithChildren<object>) {
  const [state, dispatch] = React.useReducer<React.Reducer<AppState, Action>>(
    reducer,
    initialState,
  );

  return <User.Provider value={{ state, dispatch }} {...props} />;
}

export { User, UserProvider };
