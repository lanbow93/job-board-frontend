import { useLoaderData } from "react-router-dom"
function SeekerApplicationShow(props){
    const application = useLoaderData()
    console.log(application)
    return <h1>SeekerApplicationShow</h1>
}

export default SeekerApplicationShow