import logo from './logo.svg';
import './App.css';
import Router from './Redbus/Router';
import Store from "./Redbus/Store"
import { Provider } from 'react-redux';


function App() {
  return (
    <div className="">
      <Provider store={Store}>
        <Router/>
      </Provider>
    </div>
  );
}

export default App;
