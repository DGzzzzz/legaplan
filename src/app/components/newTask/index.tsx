import React from "react";
import Button from "../button";
import styles from "./newTask.module.scss";

type NewTaskProps = {
    onClose: () => void;
}

const NewTask: React.FC<NewTaskProps> = ({ onClose }) => {

    const handleAddTask = () => {
        console.log('Adicionando tarefa');
    }

    const handleCancelTask = () => {
        onClose();
    }

    return (
        <div className={styles.taskContainer}>
            <h1 className={styles.h1}>Nova Tarefa</h1>
            <label htmlFor="title" className={styles.title}>Titulo</label>
            <input type="text" id="title" placeholder="Digite" className={styles.input} />
            <div className={styles.buttonGroup}>
                <Button type="cancel" onClick={handleCancelTask}>Cancelar</Button>
                <Button type="addSave" onClick={handleAddTask}>Adicionar</Button>
            </div>
        </div>
    )
}

export default NewTask;