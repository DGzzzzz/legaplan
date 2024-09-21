import React from 'react';
import Image from "next/image"
import styles from './taskList.module.scss'

const TaskList: React.FC = () => {
    return (
        <div className={styles.taskListContainer}>
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
    );
};

export default TaskList;