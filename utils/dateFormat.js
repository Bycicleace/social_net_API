function formatDate(input) {
    currentDate = new Date(input);
    const monthNames = [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sept',
        'Oct',
        'Nov',
        'Dec'
    ];
    let [month, day, year, hours, seconds] = [currentDate.getMonth(), currentDate.getDate(), currentDate.getFullYear(), currentDate.getHours(), currentDate.getSeconds()];
    let ampm = 'AM';
    if (hours > 12) {
        hours -= 12;
        ampm = 'PM';
    } else if (hours === 12) {
        ampm = 'PM';
    } else if (hours === 0) {
        hours = 12;
    }

    // Jan 11, 2021 1:15pm
    return `${monthNames[month]} ${day}, ${year} ${hours}:${seconds}${ampm}`;
}

module.exports = formatDate;