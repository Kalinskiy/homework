import React from 'react';


function Button(props:any) {


//props.incrementFunction
    return (
        <>
            <button  onClick={
                ()=>{
                alert('Привет ' + props.value)
                props.setValue('')}

            }
            >
               Click
            </button>
        </>
    )

}


export default Button