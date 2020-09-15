import {hwReducer} from "./homeWorkReducer";

let startState:any = {}

beforeEach(()=>{
      startState = [
        {id: '44432', name: 'Dima', age: 20},
        {id: '63122', name: 'Vanya', age: 15},
        {id: '15412', name: 'Petya', age: 18},
        {id: '54535', name: 'Dasha', age: 38},
        {id: '63737', name: 'Andrey', age: 29}
    ]

})

test('Array should not be empty',()=>{ //проверка что массив не пустой
    console.log(startState)
    const action = {type:'SORT-UP'}
    const endState = hwReducer(startState, action)
    expect(endState).toHaveLength(5)
})

test('Sorted people up by their names',()=>{
    const action = {type:'SORT-UP'}
    const endState = hwReducer(startState, action)
    expect(endState).toEqual( startState = [
        {id: '63737', name: 'Andrey', age: 29},
        {id: '54535', name: 'Dasha', age: 38},
        {id: '44432', name: 'Dima', age: 20},
        {id: '15412', name: 'Petya', age: 18},
        {id: '63122', name: 'Vanya', age: 15},
    ])
})
test('Sorted people up by their names',()=>{
    const action = {type:'SORT-DOWN'}
    const endState = hwReducer(startState, action)
    expect(endState).toEqual( startState = [
        {id: '63122', name: 'Vanya', age: 15},
        {id: '15412', name: 'Petya', age: 18},
        {id: '44432', name: 'Dima', age: 20},
        {id: '54535', name: 'Dasha', age: 38},
        {id: '63737', name: 'Andrey', age: 29},
    ])
})