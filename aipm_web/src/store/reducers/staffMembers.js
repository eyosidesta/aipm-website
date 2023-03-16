export const staffMembersReducer = (state = [], action) => {
    switch(action.type) {
        case "GET_STAFF_MEMBERS":
            return state = action.payload;
        default:
            return state;
    }
}
export const staffMemberReducer = (state = {}, action) => {
    switch(action.type) {
        case "GET_STAFF_MEMBER":
            return state = action.payload;
        default:
            return state;
    }
}