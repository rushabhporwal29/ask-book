import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Router>
       <Routes>
          <Route exact path="/" element={<SignIn/>}/>
          <Route path="/signUp" element={<SignUp/>}/>
          <Route path="/app" element={<Main/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
