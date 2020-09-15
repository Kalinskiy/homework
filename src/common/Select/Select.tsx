import React from "react";
import {SelectItem} from "../../HomeWork7/HomeWork7";



type propsType={
    items:Array<SelectItem>
    onChange:(e:React.ChangeEvent<HTMLSelectElement>)=>void
    value: SelectItem
}
const Select = (props:propsType) => {



    return <>
        <select name="" id="" onChange={props.onChange} value={props.value.id}>
            {/*<option value={props.arrayNames.map()}/>*/}
            {props.items.map(i=><option key={i.id} value={i.id}>{ i.value}</option>)}
        </select >
    </>
}

export default Select