import React, { FC } from 'react';
import { IInput } from '../../../types/UI/IInput';

const Input: FC<IInput> = (props) => {
    return (
        <input name={props.name} type={props.type} placeholder={props.placeholder}/>
    );
};

export default Input;