/** @format */

import { ChangeEvent } from "react";

type InputProps = {
    label: string;
    value?: string;
    onChange :(e:ChangeEvent<HTMLInputElement>)=>void;
  };
  const InputText = ({ label, value, onChange}: InputProps) => {
    return (
      <div>
        <label>{label}</label>
        <input type='text' value={value} onChange={onChange}></input>
      </div>
    );
  };
  
  export default InputText; // 