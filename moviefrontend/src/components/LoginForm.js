import React from 'react'
import { Button } from 'react-bootstrap'
// import '../LoginForm.css'
export default class LogIn extends React.Component {
  state = {
    logIn: true,
    username: "",
    password: "",
    errors: []
  }


  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  onSubmitFunctions = (event) => {
    event.preventDefault()
    // console.log(event)
    this.logInSubmitted(event)
    // 
    // this.props.updateCart()
    // this.props.displayItems()
  }
    onClickFunctionsSignUp = (event) => {
        event.preventDefault()
        this.props.history.push('/signup')
    }


  logInSubmitted = (event) => {
    event.preventDefault()
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(response => response.json())
    .then(res_obj => {
      
      console.log(res_obj)
      if (res_obj.errors) {
        // debugger
        this.props.history.push('/')
      } else {
        this.props.setToken(res_obj)
        // this.props.getUser(res_obj)
        this.props.history.push('/movies')
      }
    })
  }

  signUpSubmitted = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json'
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
    .then(r => r.json())
    .then(data => {
      if (data.errors) {
        this.setState({
          errors: data.errors
        })
      } else {
        // this.createEmptyOrder(data)
        // this.props.setToken(data)
        this.props.history.push('/movies')
      }
    })
  }


  render(){
    return <div style={{textAlign: "Center", marginTop:"10%", fontFamily: "Courier New, Monospace", fontWeight: "100", color: "#343a40"}}>
      <ul>
        {
          this.state.errors.map(error => <li>{ error }</li>)
        }
      </ul>
      {
        this.state.logIn 
        ? 
        <section>
          <h2 >Log In</h2>
          <button style={{fontSize: "18px", borderBottom: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px"}} onClick={ () => this.setState({ logIn: false }) }>Switch to Sign Up</button>
          <br></br>
          <form onSubmit={ this.logInSubmitted }>
            <br></br>
            <label  htmlFor="log_in_username">Username</label>
            <br></br>
            <input  id="log_in_username" 
                    type="text" 
                    onChange={ this.onChange /* for controlled form input status */ } 
                    name="username" 
                    value={ this.state.username /* for controlled form input status */ } />
                    <br></br>
                    <br></br>
            <label  htmlFor="log_in_password">Password</label>
            <br></br>
            <input  id="log_in_password" 
                    type="password" 
                    onChange={ this.onChange } 
                    name="password" 
                    value={ this.state.password } />
                    <br></br><br></br>
            <input type="submit" />
          </form>
        </section>
        :
        <section>
          <h2>Sign Up</h2>
          <button style={{fontSize: "18px", borderBottom: "solid", borderWidth: "1px", borderColor: "#929ca7", margin: "20px"}} onClick={ () => this.setState({ logIn: true }) }>Switch to Log In</button>
          <br></br>
          <form onSubmit={ this.signUpSubmitted }>
          <br></br>
            <label  htmlFor="sign_up_username">Username</label>
            <br></br>
            <input  id="sign_up_username" 
                    type="text" 
                    onChange={ this.onChange } 
                    name="username" 
                    value={ this.state.username } />
                    <br></br><br></br>
            <label  htmlFor="sign_up_password">Password</label>
            <br></br>
            <input  id="sign_up_password" 
                    type="password" 
                    onChange={ this.onChange } 
                    name="password" 
                    value={ this.state.password } />
                    <br></br><br></br>
            <input type="submit" />
          </form>
        </section>
      }
    </div>
    // return <div>
    //   <ul>
    //     { this.state.errors.map(error => <li>{ error }</li>) }
    //   </ul>
    //   {
    //     this.state.logIn
    //     ?
    //     <div className="login_wrapper">
    //       <h2>Log In</h2>
    //       <form onSubmit={ this.onSubmitFunctions }>
    //         <label  htmlFor="log_in_username">Username</label>
    //         <input  id="log_in_username"
    //                 style={{ border: 'solid grey'}}
    //                 type="text"
    //                 placeholder="...Enter your username"
    //                 onChange={ this.onChange }
    //                 name="username"
    //                 value={ this.state.username } />
    //         <label  htmlFor="log_in_password">Password</label>
    //         <br/>
    //         <input  id="log_in_password"
    //                 style={{ border: 'solid grey'}}
    //                 type="password"
    //                 placeholder="...Enter your password"
    //                 onChange={ this.onChange }
    //                 name="password"
    //                 value={ this.state.password } />
    //         <input className="login_button" type="submit" />
    //       </form>
    //       <Button
    //       style={{ backgroundColor: 'black'}}
    //        variant="outline-danger" onClick={ this.onClickFunctionsSignUp }>Sign Up</Button>
    //     </div>
    //     :
    //         ""
    //   }
    // </div>
  }
}