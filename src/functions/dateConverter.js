export function dateConverter(timestamp){
    const date = new Date(timestamp)
 
    const formattedDate = date.toLocaleString('default', { month: 'long' }) + " " + date.getDate() +  ", " + date.getFullYear()

    return formattedDate

}