import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
          <Route exact path="/" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/" element={<Main/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
