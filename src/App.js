import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {

  const [pageDetails, setPageDetails] = useState({
    homeUrl: "/users",
    accessUrl: "/",
    switchText: "Recruiters",
    accessText: "Submitted Applications"
  })

  return (
    <div className="App">
      <Nav home={pageDetails.homeUrl} switchText={pageDetails.switchText} accessText={pageDetails.accessText} switchDetails={setPageDetails} />
      <Outlet/>
    </div>
  );
}

export default App;
