import classes from '../../css/calender.module.css';
import CalenderHead from '../CalendarHead';
import Content from '../Content';
import Day from '../Day';
import Number from '../Number';

const Calender = () => (
    <section className={classes.calender}>
        <Content>
            <CalenderHead />
            <Day />
            <Number />
        </Content>
    </section>
);

export default Calender;
