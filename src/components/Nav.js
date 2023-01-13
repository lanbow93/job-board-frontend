import { Link } from "react-router-dom"
function Nav(props){
    return <nav>
        <Link to={props.home}>Home</Link>
    </nav>
}

export default Nav