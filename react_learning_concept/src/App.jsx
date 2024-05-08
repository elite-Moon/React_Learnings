import './App.css';
// import Counter from './hooks/Counter';
import PropsDemo from './props/PropsDemo';
import CounterInterviewQues from './CounterInterview/CounterInterviewQues';

function App() {
  // let newArr = [1, 2, 3]; // thisis use for accessing array in props
  return (
    <>
      <CounterInterviewQues />
      <PropsDemo
        titleCard='workstation'
        aboutCard='Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi'
        buttonText='Start System'
        // someObj={newArr} //* for passing object as a prop
      />
      <PropsDemo
        titleCard='personal use'
        aboutCard='L consectetur adipisicing elit. Excepturi'
        buttonText='Start Personal System'
      />
      {/* <PropsDemo
        titleCard='performance use'
        aboutCard='sit amet consectetur adipisicing elit. Excepturi'
        // buttonText='Start Perormance System'
      /> */}
      {/* <Counter /> */}
    </>
  );
}

export default App;
