import React, {useState} from "react";
import Select from "../common/Select/Select";
import Radio from "../common/Radio/Radio";
import container from '../common/styles/container/container.module.css'


export type SelectItem = {
    value: string
    id: number
    selected: boolean
}

export type RadioItem = {
    value: string
    name: string
    id: string
    checked: boolean
}
const HomeWork7 = () => {
    const [items, setItems] = useState([ //select
        {value: 'Vanya', id: 1234234, selected: false},
        {value: 'Dasha', id: 2234234, selected: false},
        {value: 'Petya', id: 3234234, selected: true},
    ])
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newItems = items.map(i => i.id === +event.target.value ? {...i, selected: true} : {...i, selected: false})
        setItems(newItems)
    }
    const [radio, setRadio] = useState([
        {value: '1', name: 'number1', id: '1', checked: true},
        {value: '2', name: 'number1', id: '2', checked: false},
        {value: '3', name: 'number1', id: '3', checked: false}
    ])
    const onChangeRadio = (value: string) => {
        const newArr = radio.map(el => el.value === value ? {...el, checked: true} : {...el, checked: false})
        setRadio(newArr)


    }

    return <div className={container.container}>

        <Select items={items} onChange={onChange} value={items.find(i => i.selected) as SelectItem}/>
        <div>
            <Radio value={radio} onChangeRadio={onChangeRadio}/>
        </div>



    </div>
}

export default HomeWork7