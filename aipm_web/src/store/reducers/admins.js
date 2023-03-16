export const adminReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_ADMINS":
            return state = action.payload;
        default:
            return state;
    }
}