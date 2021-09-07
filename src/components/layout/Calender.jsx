import React, { Component } from 'react';
import classes from '../../css/calender.module.css';
import startDay from '../../lib/day';
import monthName from '../../lib/month';
import CalenderHead from '../CalendarHead';
import Content from '../Content';
import Day from '../Day';
import Number from '../Number';

class Calender extends Component {
    getmonth = new Date().getMonth();

    getday = new Date().getDay();

    state = {
        number: this.getmonth,
        month: null,
        day: this.getday,
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
        if (value === 'up') {
            this.numberCheck();

            this.setState((state) => ({
                number: state.number - 1,
                month: monthName(state.number - 1),
                day: startDay(state.number),
            }));
        }
        if (value === 'down') {
            this.numberCheckDwn();

            this.setState((state) => ({
                number: state.number + 1,
                month: monthName(state.number + 1),
                day: startDay(state.number + 2),
            }));
        }
    };

    render() {
        const { month, day } = this.state;

        return (
            <section className={classes.calender}>
                <Content>
                    <CalenderHead handelClick={this.handelClick} month={month} />
                    <Day />
                    <Number day={day} />
                </Content>
            </section>
        );
    }
}

export default Calender;
