
const initialState = {
    myFavorite : []
}

const rootReducer = (state = initialState, action) =>{
    switch(action.payload){
        case ADD_FAVORITE:

        case DELETE_FAVORITE:

        default: return {...state}
    }
}