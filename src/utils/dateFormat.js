const dateToMonth = (date) => {
    const month = date.getMonth() + 1;
    return month < 10 ? `0${month}` : month;
}