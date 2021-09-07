import React, { Component } from 'react';
import classes from '../../css/calender.module.css';
import startDay from '../../lib/day';
import monthName from '../../lib/month';
import CalenderHead from '../CalendarHead';
import Content from '../Content';
import Day from '../Day';
import Number from '../Number';

const date = new Date();

class Calender extends Component {
    getmonth = date.getMonth();

    getday = date.getDay();

    getyear = date.getFullYear();

    state = {
        number: this.getmonth,
        month: null,
        day: this.getday,
        year: this.getyear,
    };

    componentDidMount() {
        const { number } = this.state;
        console.log(number);
        this.setState({
            month: monthName(number),
        });
    }

    numberCheck = () => {
        const { number } = this.state;
        if (number > 12) {
            this.setState({
                number: 0,
            });
        } else if (number < 1) {
            this.setState({
                number: 12,
            });
        }
    };

    numberCheckDwn = () => {
        const { number } = this.state;
        if (number > 10) {
            this.setState({
                number: -1,
            });
        } else if (number < 0) {
            this.setState({
                number: 10,
            });
        }
    };

    handelClick = (value) => {
        const { month, year } = this.state;
        this.setYear(month, value);

        if (value === 'up') {
            this.numberCheck();

            this.setState((state) => ({
                number: state.number - 1,
                month: monthName(state.number - 1),
                day: startDay(state.number, year),
            }));
        }
        if (value === 'down') {
            this.numberCheckDwn();

            this.setState((state) => ({
                number: state.number + 1,
                month: monthName(state.number + 1),
                day: startDay(state.number + 2, year),
            }));
        }
    };

    setYear = (month, clickTrack) => {
        if (month === 'January' && clickTrack === 'up') {
            // year decrement
            this.setState((state) => ({
                year: state.year - 1,
            }));
        } else if (month === 'December' && clickTrack === 'down') {
            // year increment
            this.setState((state) => ({
                year: state.year + 1,
            }));
        }
    };

    render() {
        const { month, day, year } = this.state;
        console.log(year, month);

        return (
            <section className={classes.calender}>
                <Content>
                    <CalenderHead handelClick={this.handelClick} month={month} year={year} />
                    <Day />
                    <Number day={day} month={month} year={year} />
                </Content>
            </section>
        );
    }
}

export default Calender;
