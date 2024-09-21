import React from "react";
import styles from "./confirmDeleteModal.module.scss";
import Button from "../button";

type ConfirmDeleteModalProps = {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
};

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className={styles.taskContainer}>
            <h1 className={styles.h1}>Deletar tarefa</h1>
            <p className={styles.title}>Tem certeza que você deseja deletar essa tarefa?</p>
            <div className={styles.buttonGroup}>
                <Button onClick={onClose} type={"cancel"}>Cancelar</Button>
                <Button onClick={onConfirm} type={"delete"}>Deletar</Button>
            </div>
        </div>
    );
};

export default ConfirmDeleteModal;