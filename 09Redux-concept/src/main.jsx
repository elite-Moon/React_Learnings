import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './app/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  //! here we pass 'store' name value and inside that we pass name(prop) of store here put that name store that was named in store.js file
  <Provider store={store}>
    <App />
  </Provider>
);
