"use client"

import React from 'react';
import Image from "next/image"
import styles from './taskList.module.scss'
import Button from '../button';
import NewTaskModal from '../newTaskModal';
import NewTask from '../newTask';

type Task = {
    id: number;
    title: string;
    completed: boolean;
}

const TaskList: React.FC = () => {

    const [tasks, setTasks] = React.useState<Task[]>([
        {
            id: 1,
            title: 'Tarefa 1',
            completed: false
        },
        {
            id: 2,
            title: 'Tarefa 2',
            completed: false
        },
        {
            id: 3,
            title: 'Tarefa 3',
            completed: false
        },
    ]);

    const addTask = (title: string) => {
        const newTask: Task = {
            id: tasks.length + 1,
            title: title,
            completed: false
        }
        setTasks([...tasks, newTask]);
        handleCloseModal();
    }

    const toggleTaskCompletion = (id: number) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

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
                    {tasks.filter(task => !task.completed).map(task => (
                        <li key={task.id} className={styles.li}>
                            <div className={styles.task}>
                                <input type="checkbox" id={`task${task.id}`} className={styles.checkbox} checked={task.completed} onChange={() => toggleTaskCompletion(task.id)} />
                                <label htmlFor={`task${task.id}`}>{task.title}</label>
                            </div>
                            <Image src="/assets/images/trash.png" alt="lixeira" width={24} height={24} />
                        </li>
                    ))}
                </ul>
                <p className={styles.title}>Tarefas finalizadas</p>
                <ul className={styles.ul}>
                    {tasks.filter(task => task.completed).map(task => (
                        <li key={task.id} className={styles.li}>
                            <input type="checkbox" id={`task${task.id}`} className={styles.checkbox} checked={task.completed}
                                onChange={() => toggleTaskCompletion(task.id)} />
                            <label htmlFor={`task${task.id}`} className={task.completed ? styles.completedTask : ''}>{task.title}</label>
                            <Image src="/assets/images/trash.png" alt="lixeira" width={24} height={24} />
                        </li>
                    ))}
                </ul>
            </div>
            <div className={styles.buttonContainer}>
                <Button type="add" onClick={handleAddTask}>Adicionar tarefa</Button>
            </div>
            <NewTaskModal isOpen={isNewTaskOpen} onClose={handleCloseModal}>
                <NewTask onClose={handleCloseModal} addTask={addTask} />
            </NewTaskModal>
        </>
    );
};

export default TaskList;