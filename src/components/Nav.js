import { Link, redirect } from "react-router-dom"

let isSeeker = true

function Nav(props){
    
     function changeUserType() {
        if (isSeeker) {
            isSeeker=false;
            props.switchDetails({
                homeUrl: "/recruiters",
                homeText: "Applications Submitted",
                switchUrl: "/users",
                switchText: "Job Seekers",
                accessUrl: "/rapplications",
                accessText: "Submitted Job Postings"
            })
            return redirect("/recruiters")
        } else {
            isSeeker=true;
            props.switchDetails({
                homeUrl: "/users",
                homeText: "Job Postings",
                switchUrl: "/recruiters",
                switchText: "Recruiters",
                accessUrl: "/jsapplications",
                accessText: "Submitted Applications"
            })
            return redirect("/users")
        }
    }

    return <nav>
        <Link to={props.home}>{props.homeText}</Link>
        <Link onClick={changeUserType} to={props.switchUrl}>{props.switchText}</Link>
        <Link to={props.accessURL}>{props.accessText}</Link>
    </nav>
}

export default Nav