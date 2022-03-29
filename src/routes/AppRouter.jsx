import React from 'react';
import { Bar } from '../pages/Bar';
import { Users } from '../pages/Users';
import { Account } from '../pages/Account';
import { Reports } from '../pages/Reports';
import { PrivateRoute } from './PrivateRoute';
import { Inventory } from '../pages/Inventory';
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
                  <Route exact="true" path='/dashboard' element={ <Dashboard /> } />
                  <Route exact="true" path='/inventory' element={ <Inventory /> } /> 
                  <Route exact="true" path='/reports' element={ <Reports /> } /> 
                  <Route exact="true" path='/profile' element={ <Account /> } /> 
                  <Route exact="true" path='/users' element={ <Users /> } />              
                  {/* Si no hace match se navega hacia "/" */}
                  <Route path='*' element={ <Navigate replace to="/" /> } />

              </Route>

              <Route exact="true" path='/login' element={  <LoginScreen /> } />
              <Route exact="true" path='/signup' element={  <SingupScreen /> } />

          </Routes>
      </div>
    </Router>
  )
}
