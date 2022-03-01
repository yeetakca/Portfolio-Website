import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ProjectsPage from './Pages/ProjectsPage/ProjectsPage'
import ComingSoonPage from './Pages/ComingSoonPage/ComingSoonPage'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div className='main-page-container'>
      <Router>
          <Switch>
            <Route path="/" exact>
              <ComingSoonPage/>
            </Route>
            <Route path="/projects" exact>
            <ComingSoonPage/>
            </Route>
            <Route path="/contact" exact>
              <ComingSoonPage/>
            </Route>
            <Route path="/">
              <NotFoundPage/>
            </Route>
          </Switch>
          <NavBar/>
      </Router>
    </div>
  );
}

export default App;