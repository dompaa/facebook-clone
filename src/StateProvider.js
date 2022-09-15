// import useContext and useReducer Hooks
import React, { createContext, useContext, useReducer} from "react";

//preparing the data layer
export const StateContext = createContext();

//higher order component and using to wrap our app
// allows us to have StateProvider, to wrap the app inside StateProvider and provides that sort of data layer functionality
export const StateProvider = ({ reducer,
     initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);
// whenever we want to pull something from the data layer we use useStateValue hook
export const useStateValue = () => useContext(StateContext);