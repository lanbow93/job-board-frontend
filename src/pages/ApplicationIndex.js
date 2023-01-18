import { useLoaderData } from "react-router-dom"
import ApplicationCard from "../components/ApplicationCard"

function ApplicationIndex(props) {
    const applications = useLoaderData()
    console.log(applications)
    return <div className="applicationHolder">
        {applications.map((application) => {
            return <div key={application._id} className="applicationCard">
                <ApplicationCard data={application} />
            </div>
        })}
    </div>
}

export default ApplicationIndex