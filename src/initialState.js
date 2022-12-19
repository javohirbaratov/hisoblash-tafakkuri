export const initialState = {
    user: false,
    ball: null,
};

const reducer = (state, action) => {
    switch (action.type) {
        case "name":
            return {
                ...state,
                user: action.user,
            };
        case "ball":
            return {
                ...state,
                userBall: action.ball
            };
        default:
            return state;
    }
};

export default reducer;