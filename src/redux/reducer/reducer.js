import {
    ADD_FAVORITE,
    DELETE_FAVORITE
} from "../actions/actions"

const initialState = {
    myFavorites : []
}

const rootReducer = (state = initialState, action) =>{
    switch(action.payload){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.concat(action.payload)
            }

        case DELETE_FAVORITE:
            return{
                ...state,
                myFavorites : state.myFavorites.filter(e => e.id !== action.payload)
            }

        default: return {...state}
    }
}

export default rootReducer;