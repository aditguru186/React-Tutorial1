import './App.css';
import { BrowserRouter as Router,
Routes,
Route,
Link
} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function Header(){
  return (
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li> <Link to='/about'>About us</Link></li>
      <li> <Link to='/contact'>Contact us</Link></li>
    </ul>
  )
}
function App() {
  return (
   <Router>
    <Header/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/about' element={<About/>}></Route>
      <Route exact path='/contact' element={<Contact/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
