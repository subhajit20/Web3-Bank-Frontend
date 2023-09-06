"use client";
import React, { ChangeEvent } from "react";

interface InputsProps {
  _type?: string;
  _placeholder?: string;
  _className?: string;
  _onChange?: (e: any) => void;
}
const Input = (props: InputsProps) => {
  return (
    <input
      name="userName"
      onChange={props._onChange}
      className={props._className}
      placeholder={props._placeholder}
    />
  );
};

export default Input;
