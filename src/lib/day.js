const startDay = (month, year) => {
    const findDate = `${month} 1, ${year}`;
    const date = new Date(findDate);
    const day = date.getDay();
    return day;
};

export default startDay;
