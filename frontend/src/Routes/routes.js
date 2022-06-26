import React from 'react'
import { BrowserRouter, Redirect, Route, Router, Switch } from 'react-router-dom'
import { createBrowserHistory } from "history";
import { Login } from '../Components/Auth/Login'
import { Register } from '../Components/Auth/Register'
import { DashboardLayout } from '../Components/Layouts/DashboardLayout'
import { Dashboard } from '../Components/Pages/Dashboard'
import { Owner } from '../Components/Pages/Owner'
import { Staff } from '../Components/Pages/Staff'
import IndexProduct from '../Components/Pages/Products/IndexProduct'
import FormProduct from '../Components/Pages/Products/FormProduct';
import Cookies from 'js-cookie'

function Routes() {

  const customHistory = createBrowserHistory()

  const LoginRoute = ({...param}) => {
    if(Cookies.get('token') === undefined) {
      return <Route {...param}/>
    }else if (Cookies.get('token') !== undefined) {
      return <Redirect to={'/dashboard'}/>
    }
  }

  const AuthRoute = ({...param}) => {
    if(Cookies.get('token') === undefined) {
      return <Redirect to={'/'}/>
    }else if (Cookies.get('token') !== undefined) {
      return <Route {...param}/>
    }
  }

  return (
    <>
        <BrowserRouter>
          <Router history={customHistory}>
            <Switch>
                <LoginRoute path={'/'} exact>
                  <Login/>
                </LoginRoute>
                <Route path={'/register'} exact>
                  <Register/>
                </Route>
                <AuthRoute path={'/dashboard'} exact>
                  <DashboardLayout>
                    <Dashboard/>
                  </DashboardLayout>
                </AuthRoute>
                <AuthRoute path={'/data-owner'} exact>
                  <DashboardLayout>
                    <Owner/>
                  </DashboardLayout>
                </AuthRoute>
                <AuthRoute path={'/data-staff'} exact>
                  <DashboardLayout>
                    <Staff/>
                  </DashboardLayout>
                </AuthRoute>
                <AuthRoute path={'/product'} exact>
                  <DashboardLayout>
                    <IndexProduct/>
                  </DashboardLayout>
                </AuthRoute>
                <AuthRoute path={'/product/create'} exact>
                  <DashboardLayout>
                    <FormProduct/>
                  </DashboardLayout>
                </AuthRoute>
                <AuthRoute path={'/product/:id'} exact>
                  <DashboardLayout>
                    <FormProduct/>
                  </DashboardLayout>
                </AuthRoute>
            </Switch>
          </Router>
        </BrowserRouter>
    </>
  )
}

export default Routes