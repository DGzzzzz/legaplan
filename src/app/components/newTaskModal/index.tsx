"use client";

import React from "react";
import styles from "./newTask.module.scss";

type NewTaskProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const NewTaskModal: React.FC<NewTaskProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.newTaskOverlay}>
            <div className={styles.newTask}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
};

export default NewTaskModal;