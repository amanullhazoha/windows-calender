import React, { Component } from 'react';
import classes from '../../css/header.module.css';
import { clock, dateString, dayNight } from '../../lib/date';
import Content from '../Content';

class Header extends Component {
    state = {
        date: clock(new Date()),
        dN: dayNight(new Date()),
        dayString: dateString(new Date()),
    };

    componentDidMount() {
        setInterval(() => {
            this.trik();
        }, 1000);
    }

    componentDidUpdate() {}

    componentWillUnmount() {
        clearInterval(() => this.trik());
    }

    trik = () =>
        this.setState({
            date: clock(new Date()),
            dN: dayNight(new Date()),
        });

    render() {
        const { date, dN, dayString } = this.state;
        return (
            <header id={classes.header}>
                <Content>
                    <h1>
                        {date}
                        <span>{dN}</span>
                    </h1>
                    <p>{dayString}</p>
                    {/* <p>Monday, September 6, 2021</p> */}
                </Content>
            </header>
        );
    }
}

export default Header;
