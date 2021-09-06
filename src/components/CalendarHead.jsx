import classes from '../css/calendarHead.module.css';
import Button from './Button';

const CalenderHead = () => (
    <div className={classes.head}>
        <p>September 2021</p>
        <div className={classes.arrowBtn}>
            <Button type="button">
                <i className="fas fa-chevron-up" />
            </Button>
            <Button type="button">
                <i className="fas fa-chevron-down" />
            </Button>
        </div>
    </div>
);

export default CalenderHead;
