export const createDate = () => {
    const hours = new Date().getHours().toString()
    const minutes = new Date().getMinutes().toString()
    
    let date = "";
    (hours < 10) ? date += `0${hours}` : date += hours
    date += ":";
    (minutes < 10) ? date += `0${minutes}` : date += minutes
    return date
}