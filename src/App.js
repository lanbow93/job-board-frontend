import './App.css';
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { useState } from 'react';

function App() {

  const [pageDetails, setPageDetails] = useState({
    homeUrl: "/users",
    homeText: "Job Postings",
    switchUrl: "/recruiters",
    switchText: "Recruiters",
    accessUrl: "/",
    accessText: "Submitted Applications"
  })

  return (
    <div className="App">
      <Nav home={pageDetails.homeUrl} homeText={pageDetails.homeText} switchUrl={pageDetails.switchUrl} switchText={pageDetails.switchText} accessText={pageDetails.accessText} switchDetails={setPageDetails} />
      <Outlet testOut={pageDetails.accessText} />
    </div>
  );
}

export default App;
