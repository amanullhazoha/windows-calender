import '../css/global.css';
import Container from './Container';
import Calender from './layout/Calender';
import Event from './layout/Event';
import Header from './layout/Header';

const App = () => (
    <Container>
        <Header />
        <Calender />
        <Event />
    </Container>
);

export default App;
