import {AppRootStateType} from "../redux/store";


const initialState = {
    loading: false
}
type StateType ={
    loading:boolean
}

export const loadReducer = (state: StateType = initialState, action: any)=> {

    switch (action.type) {
        case 'SET_LOADING':{
            return {...state, loading: action.loading}
        }
        default:{
            return state
        }
    }
}


export const setLoadingAC = (loading: boolean) => {
    return {type: 'SET_LOADING', loading} as const
}
