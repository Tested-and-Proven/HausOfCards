import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'
import LandingPage from './components/LandingView/landingpage.js'
import LoginView from './components/LoginView/loginpage.js'
import RegisterView from './components/RegisterView/registerpage.js'
class App extends React.Component {
    constructor(props){
      super(props);
    }
    render () {
      return (
          <Router history={hashHistory}>
            <Route path='/' component={Container}>
              <IndexRoute component={Home} />
              <Route path='/account' component={Account} />
              <Route path='/practice' component={Practice} />
              <Route path='/new-deck' component={NewDeck} />
              <Route path='/login' component={Login} />
              <Route path='/register' component={Register} />
              <Route path='*' component={NotFound} />
            </Route>
          </Router>
        );
    }
}

const Nav = () => (
    <div>
      <Link to='/'> Home </Link>&nbsp;
      <Link activeStyle={{color:'#53acff'}} to='/account'>Account</Link>&nbsp;
      <Link activeStyle={{color:'#53acff'}} to='/practice'>Practice</Link>&nbsp;
      <Link activeStyle={{color:'#53acff'}} to='/new-deck'>New Deck</Link>&nbsp;
      <Link activeStyle={{color:'#53acff'}} to='/login'>Login</Link>&nbsp;
      <Link activeStyle={{color:'#53acff'}} to='/register'>Register</Link>&nbsp;
    </div>
  )
const Container = (props) => (
    <div>
      <Nav />
      {props.children}
    </div>
  )
const Home = () => <section><LandingPage /></section>
const Account = () => <div><h1>This is Where Account info will be</h1></div>
const Practice = () => <div><h1>This is Where You Practice</h1></div>
const NewDeck = () => <div><h1>This is Where You Make A Deck</h1></div>
const Login = () => <section><LoginView /></section>
const Register = () => <section><RegisterView /></section>
const NotFound = () => <h1> This Page Aint Here Homey!</h1>

export default App;
