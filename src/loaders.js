const URL = process.env.REACT_APP_APIURL

export const postingLoader = async () => {
    const response = await fetch(URL + "/user")
    const posts = await response.json()
    return posts
}





