const initialState = {
    userLocations: []
};

export default (state = initialState, action) => {
    if (action.type === "GET_INITIAL_USER_LOCATIONS") {
        return {
            ...state,
            userLocations: action.locations
        };
    }
    if (action.type === "UPDATE_USER_LOCATIONS") {
        return {
            ...state,
            userLocations: [
                ...state.userLocations,
                action.newLocation
            ]
        };
    }
    return state;
};