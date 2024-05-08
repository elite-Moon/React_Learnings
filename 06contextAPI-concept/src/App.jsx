import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './context/UserContextProvider';

// import './App.css';
function App() {
  return (
    <>
      <UserContextProvider>
        <h1>Hello context</h1>
        <Login />
        <br />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
