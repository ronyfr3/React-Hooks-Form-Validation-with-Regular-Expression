import React from 'react'
import FormSignup from './FormSignup'
import FormSignIn from './FormSignIn'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const Form = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={FormSignup}/>
        <Route exact path='/login' component={FormSignIn}/>
        <Route/>
      </Switch>
    </Router>
  )
}

export default Form
