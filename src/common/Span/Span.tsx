import React from 'react';

export type PropsType={
    spanDisplay?:number | string
    name?:string
    toggleMode?:()=>void
    value?:string
    changeEditMode:()=>void
}
function Span(props:PropsType) {
    return (
        <>
            <span onDoubleClick={props.changeEditMode}>{props.spanDisplay}{props.value}</span>
        </>
    )

}


export default Span