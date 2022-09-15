// initial state, how data layer initially looks like
// when we start, we're going to have a user which isn't logged in and null
export const initialState = {
    user: null,
};

// the action state
// can dispatch the actions into data layer
export const actionTypes = {
    SET_USER: "SET_USER",
};

// inside the reducer we listen the action
// if you just received an action to set the user action
// then return what the new data layer will look like
// return whatever it looks like (...state) but change the user whatever we passed in as a user payload inside of the action we dispatched
const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user,
            };
    // if we don't listen to certain action we can return the state
        default:
            return state;
    }
};

export default reducer;