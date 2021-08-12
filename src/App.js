import { Switch, Route,Redirect } from 'react-router-dom';
import AboutMe from './Components/About';
import './App.css';
import Education from './Components/Education';
import Main from './Components/Main';
import Projects from './Components/Projects';
import ContactUs from './Components/Contact';
import Nav from './Components/Nav';

function App() {
  return(
    <>
    <div className="Navbar">
    <Nav/>
    </div>
    <div className="main">
     <Switch>
       <Route path='/' exact component={Main}/>
       <Route path='/about' exact component={AboutMe}/>
       <Route path='/education' exact component={Education}/>
       <Route path='/portfolio' exact component={Projects}/>
       <Route path='/sayhello' exact component={ContactUs}/>
       <Route path='*' >
         <Redirect to='/'/>
       </Route>
      </Switch>
    </div>
   
    </>
  );
}

export default App;
