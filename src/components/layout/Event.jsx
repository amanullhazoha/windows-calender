import classes from '../../css/event.module.css';
import Button from '../Button';
import Content from '../Content';

const Event = () => (
    <section className={classes.event}>
        <Content>
            <Button type="button" text="Set Event" />
        </Content>
    </section>
);

export default Event;
