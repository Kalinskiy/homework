import React, {ChangeEvent} from "react";
import Input from "../Input/Input";
import Span from "../Span/Span";


type propsType = {
    value: string
    onChange: (e: ChangeEvent<HTMLInputElement>) => any
    onKeyPressHandler?: (e: React.KeyboardEvent<HTMLInputElement>) => void
    changeEditMode?: () => void
    editMode?: boolean
    onBlur?: any

}
const EditableSpan = (props: propsType) => {


    return (<div>
            {
                props.editMode
                    ? <Span
                        onDoubleClick={props.changeEditMode}
                        value={props.value}
                    />
                    : <Input

                        onChange={props.onChange}
                        value={props.value}
                        onKeyPressHandler={props.onKeyPressHandler}
                        onBlur={props.changeEditMode}
                    />
            }


        </div>
    )
}


export default EditableSpan