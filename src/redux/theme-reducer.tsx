const initialState = {
    darkMode: false
}
type StateType = {
    darkMode: boolean
}

export const themeReducer = (state: StateType = initialState, action: any) => {

    switch (action.type) {
        case 'CHANGE-MODE': {
            return {...state, darkMode: action.darkMode}
        }
        default: {
            return state;
        }
    }
}


export const changeModeAC = (darkMode: boolean) => {
    return {type: 'CHANGE-MODE', darkMode} as const
}
