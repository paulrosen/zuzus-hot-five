const formatDate = (date) => {
    return date.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const months = [ '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const formatHtmlDate = (date) => {
    const d = new Date(date+ "T12:00:00.000Z") // To compensate for timezone
    const dateArray = date.split("-");
    return `${days[d.getDay()]} ${months[parseInt(dateArray[1],10)]} ${dateArray[2]}, ${dateArray[0]}`;
};

export { formatDate, formatHtmlDate };
