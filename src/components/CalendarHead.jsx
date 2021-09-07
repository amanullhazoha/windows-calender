import classes from '../css/calendarHead.module.css';
import Button from './Button';

const CalenderHead = ({ handelClick, month }) => (
    <div className={classes.head}>
        <p>{month} 2021</p>
        <div className={classes.arrowBtn}>
            <Button type="button" onClick={() => handelClick('up')}>
                <i className="fas fa-chevron-up" />
            </Button>
            <Button type="button" onClick={() => handelClick('down')}>
                <i className="fas fa-chevron-down" />
            </Button>
        </div>
    </div>
);

export default CalenderHead;
