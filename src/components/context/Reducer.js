const reducers = (state, action) => {
    switch (action.type) {
        case "UPDATE_USER_DATA":
            const userData = { ...state.userData, ...action.payload };
            localStorage.setItem("userData", JSON.stringify(userData));
            return {
                ...state,
                userData: userData,
            };
        case "UPDATE_USER_ARRAY":
            const users = { ...state.users, ...action.payload };
            localStorage.setItem("users", JSON.stringify(users));
            return {
                ...state,
                users: [...state.users,users,]
            };
        default:
            return state;
    }
};

export default reducers;
