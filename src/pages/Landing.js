import { Link } from "react-router-dom"

function Landing(props){
    return <div className="landing">
        <Link to="/recruiters">Recruiter</Link>
        <Link to="/users">Job Seeker</Link>
    </div>
}

export default Landing