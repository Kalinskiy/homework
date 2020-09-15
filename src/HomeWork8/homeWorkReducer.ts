import {Person} from "./HomeWork8";


export const hwReducer =
    (state: Array<{ id: string, name: string, age: number }>, action: any) => {
        switch (action.type) {
            case 'SORT-UP': {
                const copyState = [...state]
                copyState.sort((a:Person,b:Person)=> {

                    if(a.name < b.name){
                        return -1
                    }
                    if(a.name >b.name){
                        return 1
                    }
                    return 0;
                })
                return copyState
            }
            case 'SORT-DOWN': {
                const copyState = [...state]
                copyState.sort((a:Person,b:Person)=> {

                    if(a.name > b.name){
                        return -1
                    }
                    if(a.name <b.name){
                        return 1
                    }
                    return 0;
                })
                return copyState
            }
            case 'CHECK':{

                const copyState = [...state]
                return   copyState.filter(age=> age.age >= 18)

            }
            default:
                return state;

        }


    };

export const sortUp = () => {
    return {type: 'SORT-UP'}
}
export const sortDown = () => {
    return {type: 'SORT-DOWN'}
}
export const checkAC = () => {
    return {type: 'CHECK' }
}
