export const newsReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_NEWS":
            return state = action.payload;
        default:
            return state;
    }
}