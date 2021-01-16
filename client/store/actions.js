export const getInitialUserLocations = () => {
    return async dispatch => {
        const response = await fetch('/initial-user-locations');
        const userInputLocations = await response.json();
        dispatch({
            type: "GET_INITIAL_USER_LOCATIONS",
            locations: userInputLocations
        });
    };
};

export const updateUserLocations = (newLocation) => {
    return dispatch => {
        dispatch({
            type: "UPDATE_USER_LOCATIONS",
            newLocation
        });
    };
};