import React from 'react';
import { Bar } from '../pages/Bar';
import { Action } from '../pages/Action';
import { Dashboard } from '../pages/Dashboard';
import { SingupScreen } from '../pages/SingupScreen';
import { LoginScreen } from '../pages/LoginScreen';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';

export const AppRouter = () => {
  return (
    <Router>
      <div>
          <Routes>
              <Route path='/' element={ <Bar /> }>
                  <Route exact="true" path='/action' element={ <Action /> } /> 
                  <Route exact="true" path='/dashboard' element={ <Dashboard /> } />           
                  {/* Si no hace match se navega hacia "/" */}
                  <Route path='*' element={ <Navigate replace to="/" /> } />
              </Route>

              <Route exact="true" path='/login' element={  <LoginScreen /> } />
              <Route exact="true" path='/singup' element={  <SingupScreen /> } />

          </Routes>
      </div>
    </Router>
  )
}
