const formatDate = (date) => {
    return date.toLocaleDateString("en-us", {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
    });
};

const months = [ '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const formatHtmlDate = (date) => {
    const dateArray = date.split("-");
    return `${months[parseInt(dateArray[1],10)]} ${dateArray[2]}, ${dateArray[0]}`;
};

export { formatDate, formatHtmlDate };
