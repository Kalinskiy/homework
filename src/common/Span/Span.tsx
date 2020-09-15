import React from 'react';

export type PropsType={
    spanDisplay?:number | string
    name?:string
    toggleMode?:()=>void
    value?:string
    onDoubleClick?:()=>void
    style?:any
    className?:any
}
function Span(props:PropsType) {
    return (
        <>
            <span className={props.className} style={props.style} onDoubleClick={props.onDoubleClick}>{props.spanDisplay}{props.value}</span>
        </>
    )

}


export default Span