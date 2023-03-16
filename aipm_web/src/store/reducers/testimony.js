export const testimoniesReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_TESTIMONIES":
            return state = action.payload;
        default:
            return state;
    }
}
export const testimonyReducer = (state = {}, action) => {
    switch(action.type) {
        case "GET_TESTIMONY":
            return state = action.payload;
        default:
            return state;
    }
}