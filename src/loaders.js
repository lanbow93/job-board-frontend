const URL = process.env.REACT_APP_APIURL

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

