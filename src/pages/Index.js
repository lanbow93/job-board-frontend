import { useLoaderData } from "react-router-dom"
import JobCard from "../components/JobCard"

function Index(props) {
    const postings = useLoaderData()
    console.log(postings)
    return <div className="jobCardHolder">
        {postings.map((post) => {
            return <div key={post._id} className="jobCard">
                <JobCard data={post} />
            </div>   
        })}
    </div>
}

export default Index