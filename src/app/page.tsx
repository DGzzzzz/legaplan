import NewTask from './components/newTask';
import TaskList from './components/tasks';
import './styles/globals.scss';

export default function Home() {
  
  return (
    <>
      <TaskList />
      <NewTask />
    </>
  );
}
