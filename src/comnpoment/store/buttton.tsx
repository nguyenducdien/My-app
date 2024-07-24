import React from "react";
import { useDispatch, UseDispatch,useSelector } from "react-redux";
import { changeColor } from "./action";
import { RootState } from "./index";

interface buttonProps {
    id:string;
    color: string
}
const Button =({id}:buttonProps)=>{
    const dispatch = useDispatch();
    const color = useSelector((state:RootState)=>state[id])

    const handleClick=()=>{
    const newColor = color ==='blue'?'red':'green'  
        dispatch(changeColor(id, newColor));
    }
    return <button
    style={{backgroundColor : color}}
    onClick={handleClick}
    >
        {id}

    </button>
}   
export default Button;