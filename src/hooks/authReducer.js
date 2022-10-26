export const AuthReducer = (initialState,action) => {
    switch(action.type) {
        case "LOGIN":
            return{
                ...initialState,
                user:action.payload.user,
                token: action.payload.token
            };
        case "LOGOUT":
            return{
                ...initialState,
                user:"",
                token:""
            }
        default: 
            return initialState;
    }
}