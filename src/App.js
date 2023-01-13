import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';

function App() {
  let isUser = true;

  return (
    <div className="App">
      <Nav home={isUser ? "/users" : "/recruiters" } />
      <Outlet/>
    </div>
  );
}

export default App;
