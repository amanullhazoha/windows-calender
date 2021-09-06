import classes from '../../css/header.module.css';
import Content from '../Content';

const Header = () => {
    const date = new Date();
    console.log(date.getMinutes(), date.getHours());
    return (
        <header id={classes.header}>
            <Content>
                <h1>
                    8:12:01 <span>PM</span>
                </h1>
                <p>Monday, September 6, 2021</p>
            </Content>
        </header>
    );
};

export default Header;
