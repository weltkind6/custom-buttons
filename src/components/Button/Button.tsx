import React, { ReactNode } from 'react';
import styles from './styles.module.css';

interface IProps {
    children?: ReactNode;
    onClick?: () => void;
    color?: 'primary' | 'secondary' | 'success' | 'danger';
    size?: 'S' | 'M' | 'L';
    borderRadius?: boolean;
    disabled?: boolean;
}

const Button = ({children, onClick, color, size, borderRadius, disabled}: IProps) => {

    return (
        <button
        className={`
        ${styles.button} 
        ${styles[`btn--${color}`]}
        ${styles[`btn--${size}`]}
        ${borderRadius ? styles.borderRadius : null}
        `}
        onClick={onClick}
        disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
