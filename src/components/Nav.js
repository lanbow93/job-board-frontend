import { Link } from "react-router-dom"

let isSeeker = true

function Nav(props){
    
     function changeUserType() {
        if (isSeeker) {
            isSeeker=false;
            props.switchDetails({
                homeUrl: "/recruiters",
                accessUrl: "/",
                switchText: "Job Seekers",
                accessText: "Submitted Job Postings"
            })
        } else {
            isSeeker=true;
            props.switchDetails({
                homeUrl: "/users",
                accessUrl: "/",
                switchText: "Recruiters",
                accessText: "Submitted Applications"
            })
        }
    }

    return <nav>
        <Link to={props.home}>Home</Link>
        <Link onClick={changeUserType} to={props.home} >{props.switchText}</Link>
        <Link to={props.home}>{props.accessText}</Link>
    </nav>
}

export default Nav