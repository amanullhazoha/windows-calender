import monthName from './month';

const getDay = (date) => {
    const d = date.getDay();
    let today = null;

    switch (d) {
        case 0:
            today = 'Sunday';
            break;
        case 1:
            today = 'Monday';
            break;
        case 2:
            today = 'Tuesday';
            break;
        case 3:
            today = 'Wednesday';
            break;
        case 4:
            today = 'Thursday';
            break;

        case 5:
            today = 'Friday';
            break;

        case 6:
            today = 'Saturday';
            break;

        default:
            today = console.log('Input Right Date');
    }

    return today;
};

const months = (date) => {
    const m = date.getMonth();
    return monthName(m);
};

const getDate = (date) => {
    const dateN = date.getDate();
    return dateN;
};

const getYear = (date) => {
    const year = date.getFullYear();
    return year;
};

export const clock = (date) => {
    const clk = date.toLocaleTimeString();
    const clkSlice = clk;
    return clkSlice.toString().slice(0, -2);
};

export const dayNight = (date) => {
    const hour = date.getHours();
    let amPm = null;
    if (hour >= 12) {
        amPm = 'PM';
    } else {
        amPm = 'AM';
    }
    return amPm;
};

export const dateString = (date) =>
    `${getDay(date)}, ${months(date)} ${getDate(date)},${getYear(date)}`;
