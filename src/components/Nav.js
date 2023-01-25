import { Link } from "react-router-dom"
import { useState, useEffect } from 'react';

function Nav(props){
    const [pageDetails, setPageDetails] = useState({
        homeUrl: "/users",
        homeText: "Job Listings",
        switchUrl: "/recruiters",
        switchText: "Recruiters",
        accessUrl: "/jsapplications",
        accessText: "Submitted Applications"
      })
    
      useEffect(() => {
        const path = new URL(window.location).pathname
        console.log("path", path) // just to make sure that last line worked
       
        switch(path){
          case "/users":
           setPageDetails({
            homeUrl: "/users",
            homeText: "Job Listings",
            switchUrl: "/recruiters",
            switchText: "Recruiters",
            accessUrl: "/jsapplications",
            accessText: "Submitted Applications"
            
    
        })
           break
       
          case "/recruiters":
           setPageDetails({
            homeUrl: "/recruiters",
            homeText: "Posting Stats",
            switchUrl: "/users",
            switchText: "Job Seekers",
            accessUrl: "/rapplications",
            accessText: "Job Postings"
            })
           break
       
          default:
            setPageDetails({
              homeUrl: "/users",
              homeText: "Job Listings",
              switchUrl: "/recruiters",
              switchText: "Recruiters",
              accessUrl: "/jsapplications",
              accessText: "Submitted Applications"
          })
        }
       
       }, [])
    
    
    
    return <nav>
        <Link to={pageDetails.homeUrl}>{pageDetails.homeText}</Link>
        <Link to={pageDetails.switchUrl} >{pageDetails.switchText}</Link>
        <Link to={pageDetails.accessUrl}>{pageDetails.accessText}</Link>
    </nav>
}

export default Nav 