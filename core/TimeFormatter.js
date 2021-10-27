export const timeFormatter = (data) => {
    let formatted_data = ''
    formatted_data = `${data.getDate()}.${data.getMonth()}.${data.getFullYear()}`
    return formatted_data
}