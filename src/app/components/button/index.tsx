"use client"

import React from 'react'
import styles from './button.module.scss'

type ButtonProps = {
    type: 'add' | 'delete' | 'cancel';
    onClick: () => void;
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
    return (
        <button className={`${styles.button} ${styles[type]}`} onClick={onClick}>
            { children }
        </button >
    )
}

export default Button;