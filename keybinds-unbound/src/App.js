import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import {
  atom,
  // selector,
  // useRecoilState,
  useRecoilValue,
} from 'recoil';

const aThing = atom({
  key: "aThing",
  default: "Something COOOL"
})

function App() {
  const garble = useRecoilValue(aThing)
    
  return (
    <div className="App">
      <header className="App-header">
        <p>
          stuff and things: {garble}
        </p>
      </header>
      <Col className="Body">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Body</p>
      </Col>
      <footer>
        <p>Footer</p>
      </footer>
    </div>
  );
}

export default App;
