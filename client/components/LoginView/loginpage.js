import React, {Component} from 'react';

class LoginView extends Component {
  constructor() {
    super()
  }
  render() {
    return (
      <section>
        <h1>Please Enter Your Login Information Below</h1>
        <section>
          <form>
            <input 
              type = "text"
              name = "name"
              placeholder = "Enter Username"/>
            <input 
              type = "password"
              name = "password"
              placeholder = "Type Password Here"
              />
            <input 
              type = "submit"
              name = "submit"
              value = "Enter"
            />
          </form>
        </section>
      </section>
    )
  } 
}

export default LoginView