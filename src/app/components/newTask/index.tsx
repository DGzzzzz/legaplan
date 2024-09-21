import React from "react";
import Button from "../button";
import styles from "./newTask.module.scss";

type NewTaskProps = {
    onClose: () => void;
    addTask: (title: string) => void;
}

const NewTask: React.FC<NewTaskProps> = ({ onClose, addTask }) => {

    const [title, setTitle] = React.useState('');

    const handleAddTask = () => {
        addTask(title);
    }

    const handleCancelTask = () => {
        onClose();
    }

    return (
        <div className={styles.taskContainer}>
            <h1 className={styles.h1}>Nova Tarefa</h1>
            <label htmlFor="title" className={styles.title}>Titulo</label>
            <input type="text" id="title" placeholder="Digite" className={styles.input} value={title} onChange={(e) => setTitle(e.target.value)} />
            <div className={styles.buttonGroup}>
                <Button type="cancel" onClick={handleCancelTask}>Cancelar</Button>
                <Button type="addSave" onClick={handleAddTask}>Adicionar</Button>
            </div>
        </div>
    )
}

export default NewTask;