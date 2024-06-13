import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <>
      {/* <div className='text-3xl bg-red-600'>helllo redux</div> */}
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
