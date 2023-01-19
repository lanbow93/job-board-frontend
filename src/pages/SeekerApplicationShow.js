import { Form } from "react-router-dom"
import { useLoaderData } from "react-router-dom"
function SeekerApplicationShow(props){
    const application = useLoaderData()
    return <div className="applicationFormPage">
        

    <Form action="/create/users" method="post" className="split">
        <h4 className="centerTitle">Update Application</h4>
        <label className="required">Name: </label>
        <input type="text" name="name" placeholder="John Smith" defaultValue={application.name} />
        <label >Number: </label>
        <input type="text" name="number" placeholder="(XXX) - XXX - XXXX" defaultValue={application.number}/>
        <label className="required">Email: </label>
        <input type="text" name="email" placeholder="email@email.com" defaultValue={application.email}/>
        <label >LinkedIn URL: </label>
        <input type="text" name="linkedin" placeholder="linkedinurl.com" defaultValue={application.linkedin}/>
        <label className="required"> Resume: </label><br />
        <textarea rows="10" cols="100" name="resume">{application.resume}</textarea>
        <input type="hidden" value={application.postID} name="postID"/>
        <input type="submit" value="Submit Application" />
        <p>Bolded Items are <span className="required">REQUIRED</span></p>
        <p>Job ID: {application.postID}</p>
        
    </Form>
    
</div>

}

export default SeekerApplicationShow