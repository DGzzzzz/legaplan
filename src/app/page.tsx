import Header from './components/header/header';
import TaskList from './components/tasks';
import './styles/globals.scss';

export default function Home() {

  return (
    <>
      <Header>
        <TaskList />
      </Header>
    </>
  );
}
