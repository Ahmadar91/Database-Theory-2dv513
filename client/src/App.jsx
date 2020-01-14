import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './screens/home/Home'
import Create from './screens/create/Create'
import ByUser from './screens/buildsByUser/ByUser'
import './App.css'
import ComputersByGpu from './screens/statistics/ComputersByGpu'

export default function App () {
  return (
    <Router>
      <div className='App'>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/byUser'>Computers by User</Link>
            </li>
            <li>
              <Link to='/statistics/byGPU'>Statistics</Link>
            </li>
            <li>
              <Link to='/create'>Create a build</Link>
            </li>
          </ul>
        </nav>
        <div className='App-header'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/byUser'>
              <ByUser />
            </Route>
            <Route exact path='/statistics/byGPU'>
              <ComputersByGpu />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  )
}
