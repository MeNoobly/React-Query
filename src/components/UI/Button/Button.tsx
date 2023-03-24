import React, { FC } from 'react';
import { IButtonProps } from '../../../types/UI/IButton';

const Button: FC<IButtonProps> = (props) => {
    return (
        <button 
            onClick={props.onClick}
            disabled={props.disabled}
            type={props.type}
        >
            {props.text}
        </button>
    );
};

export default Button;