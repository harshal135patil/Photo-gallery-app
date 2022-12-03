import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'; 
import NavbarComponent from './components/NavbarComponent';
import Photos from './components/Photos'
import About  from './components/About'
import Contact from './components/Contact'
import Photo from './components/Photo'

function App() {
  return (
    <BrowserRouter>
    <NavbarComponent />
    <Switch>
      <Route exact path="/">
        <Photos />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact /> 
      </Route>
      <Route path="/photos/:id">
      {  <Photo /> }
      </Route>
    </Switch>
  </BrowserRouter>
  )
  }




export default App;
