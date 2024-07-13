import React,{useState} from "react";
import NoteContext from "./NoteContext";

const NoteState = (props)=>{

    const s1 ={
        name:"rishi",
        email:"abc@xyz.com"
    }

    const [state,setState] = useState(s1);

    const update = ()=>{
        setTimeout(() => {
            setState({
                name:"RRRR",
                email:"EEE"
            })
        }, 3000);
    }

    return (
        <NoteContext.Provider value={{state,update}}>
            {props.children}
        </NoteContext.Provider>
    )
};

export default NoteState;