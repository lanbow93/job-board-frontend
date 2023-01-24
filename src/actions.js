import { redirect } from "react-router-dom"
const URL =  "https://job-board-backend-jryb.onrender.com"

export const createApplicationAction = async ({request}) => {

    const formData = await request.formData()

     const newApplication = {
        name: formData.get("name"),
        number: formData.get("number"),
        email: formData.get("email"),
        linkedin: formData.get("linkedin"),
        resume: formData.get("resume"),
        postID: formData.get("postID") 
    }

    await fetch(`${URL}/user`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newApplication)
    })

    return redirect("/jsapplications")
}

export const updateApplicationAction = async ({request, params}) => {

    const formData = await request.formData()
    const newApplication = {
        name: formData.get("name"),
        number: formData.get("number"),
        email: formData.get("email"),
        linkedin: formData.get("linkedin"),
        resume: formData.get("resume"),
        postID: formData.get("postID") 
    }
    await fetch(`${URL}/user/${params.id}`,{
        method: "put",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newApplication)
    })

    return redirect("/jsapplications")
}
