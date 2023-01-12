import { useLoaderData } from "react-router-dom"

function Index(props) {
    const postings = useLoaderData()
    console.log(postings)
    return <div>
        {postings.map((post) => {
            return <div key={post._id} className="jobCard">
                <h1>Job Title: {post.title}</h1>
                


            </div>   
        })}
        {console.log(postings)}
    </div>
}

export default Index