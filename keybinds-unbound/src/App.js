import logo from './logo.svg';
import './App.css';
import {
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';


function App() {

  const testAtom = atom({
    key: "something",
    default: "value"
  })

  const aThing = useRecoilValue(testAtom)
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          stuff and things {aThing}
        </p>
      </header>
    </div>
  );
}

export default App;
