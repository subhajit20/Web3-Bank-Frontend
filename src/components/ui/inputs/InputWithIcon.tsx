import React from "react";

interface InputProps {
  icon?: any | string[];
  _className?:string
}

function InputWithIcon(props: InputProps) {
  return (
    <div className={props._className}>
      <span className="justify-self-center place-self-center">{props.icon}</span>
      <input className="input input-primary justify-self-start" placeholder="Primary" />
    </div>
  );
}

export default InputWithIcon;
