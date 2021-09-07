const startDay = (month) => {
    const findDate = `${month} 1, 2021`;
    const date = new Date(findDate);
    const day = date.getDay();
    return day;
};

export default startDay;
