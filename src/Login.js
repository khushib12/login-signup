import React from 'react';
import fire from './firebase/firebase';

class Login extends React.Component {

  signUp() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().createUserWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed Up');
      })
      .catch((err) => {
        alert('Error: ' + err.toString());
      })
  }

  login() {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then((u) => {
        console.log('Successfully Signed In');
      })
      .catch((err) => {
        alert('Error: ' + err.toString());
      })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <div>
          <div>Email</div>
          <input id="email" placeholder="Enter Email.." type="text"/>
        </div>
        <div>
          <div>Password</div>
          <input id="password" placeholder="Enter Password.." type="password"/>
        </div>
        <button style={{margin: '10px'}} onClick={this.login}>Sign In</button>
        <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
      </div>
    )
  }
}

export default Login;