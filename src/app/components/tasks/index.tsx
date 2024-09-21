"use client"

import React from 'react';
import Image from "next/image"
import styles from './taskList.module.scss'
import Button from '../button';
import NewTaskModal from '../newTaskModal';
import NewTask from '../newTask';

const TaskList: React.FC = () => {
    const [isNewTaskOpen, setIsNewTaskOpen] = React.useState(false);

    const handleAddTask = () => {
        setIsNewTaskOpen(true);
    }

    const handleCloseModal = () => {
        setIsNewTaskOpen(false);
    }

    return (
        <>
            <div className={isNewTaskOpen ? styles.taskListContainerBlur : styles.taskListContainer}>
                <p className={styles.title}>Suas tarefas de hoje</p>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <div className={styles.task}>
                            <input type="checkbox" id='task1' className={styles.checkbox} />
                            <label htmlFor='task1'> Tarefa 1 </label>
                        </div>
                        <Image src="/assets/images/trash.png" alt="lixeira" width={24} height={24} />
                    </li>
                    <li className={styles.li}>
                        <div className={styles.task}>
                            <input type="checkbox" id='task2' className={styles.checkbox} />
                            <label htmlFor='task2'> Tarefa 1 </label>
                        </div>
                        <Image src="/assets/images/trash.png" alt="lixeira" width={24} height={24} />
                    </li>
                    <li className={styles.li}>
                        <div className={styles.task}>
                            <input type="checkbox" id='task3' className={styles.checkbox} />
                            <label htmlFor='task3'> Tarefa 1 </label>
                        </div>
                        <Image src="/assets/images/trash.png" alt="lixeira" width={24} height={24} />
                    </li>
                </ul>
                <p className={styles.title}>Tarefas finalizadas</p>
                <ul className={styles.ul}>
                    <li className={styles.li}>
                        <input type="checkbox" id='task4' className={styles.checkbox} />
                        <label htmlFor='task4'> Tarefa 1 </label>
                        <Image src="/assets/images/trash.png" alt="lixeira" width={24} height={24} />
                    </li>
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                <Button type="add" onClick={handleAddTask}>Adicionar tarefa</Button>
            </div>
            <NewTaskModal isOpen={isNewTaskOpen} onClose={handleCloseModal}>
                <NewTask onClose={handleCloseModal}/>
            </NewTaskModal>
        </>
    );
};

export default TaskList;