import React, {Component} from 'react';

class RegisterView extends Component {
  constructor () {
    super () 
  }

  render () {
    return (
        <section>
          <h1>Please Register Below</h1>
          <section>
            <input 
              type= "text"
              name= "firstName"
              placeholder= "Enter First Name"/>
            <input 
              type= "text"
              name= "lastName"
              placeholder= "Enter Last Name "/>
            <input 
              type= "text"
              name= "email"
              placeholder= "Enter Email "/>
            <input 
              type= "password"
              name= "password"
              placeholder= "Enter Prefered Password"/>
            <input 
              type = "submit"
              name = "submit"
              value = "Enter"
            />
          </section>
        </section>
      )
  }
}

export default RegisterView