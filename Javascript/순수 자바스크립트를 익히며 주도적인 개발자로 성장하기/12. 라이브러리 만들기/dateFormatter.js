function getCurrentDate(format) {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, 0);
    const day = date.getDate();

    format = format.replace('YYYY', year);
    format = format.replace('MM', month);
    format = format.replace('DD', day);

    return format;
}

const d = getCurrentDate('YYYY MM DD');
console.log(d);
