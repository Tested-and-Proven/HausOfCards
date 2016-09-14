import React, {Component} from 'react';
import { Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

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
              <Route path='/make_deck' component={MakeDeck} />
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
      <Link activeStyle={{color:'#53acff'}} to='/make_deck'>Make A Deck</Link>
    </div>
  )
const Container = (props) => (
    <div>
      <Nav />
      {props.children}
    </div>
  )
const Home = () => <div><h1>We in here!</h1></div>
const Account = () => <div><h1>This is Where Account info will be</h1></div>
const Practice = () => <div><h1>This is Where You Practice</h1></div>
const MakeDeck = () => <div><h1>This is Where You Make A Deck</h1></div>
const NotFound = () => <h1> This Page Aint Here Homey!</h1>

export default App;
