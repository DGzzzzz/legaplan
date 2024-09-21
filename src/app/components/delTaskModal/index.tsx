import React from 'react';

import styles from './delTask.module.scss';

type DelTaskModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

const DelTaskModal: React.FC<DelTaskModalProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.delTaskOverlay}>
            <div className={styles.delTask}>
                <button className={styles.closeButton} onClick={onClose}>X</button>
                {children}
            </div>
        </div>
    );
}

export default DelTaskModal;