const URL = "https://job-board-backend-jryb.onrender.com"

export const postingLoader = async () => {
    const response = await fetch(URL + "/user")
    const posts = await response.json()
    return posts
}

export const postLoader = async ({params}) => {
    const response = await fetch(URL + "/user/" + params.id)
    const post = await response.json()
    return post
} 

export const applicationsLoader = async () => {
    const response = await fetch(URL + "/recruit")
    const applications = await response.json()
    return applications
}

export const applicationLoader = async({params}) => {
    const response = await fetch(`${URL}/recruit/${params.id}`);
    const application = await response.json()
    return application;
}

export const specificApplicationLoader = async ({params}) => {
    const response = await fetch(URL + `/recruit?postID=` + params.id)
    const applications = await response.json()
    return applications;
}