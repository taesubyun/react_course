import Todo from './components/Todo';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';

function App() {
  return (
    <div>
      <h1>My Todo's</h1>
      <Todo text='컴포넌트 1' />
      <Todo text='컴포넌트 2' />
      <Todo text='컴포넌트 3' />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
