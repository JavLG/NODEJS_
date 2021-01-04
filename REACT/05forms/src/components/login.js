import React, { Component } from 'react';
import { firebase, googleAuth } from '../firebase';

class Login extends Component {

    state = {
        status:false
    }

    signIn = () => {
        firebase.auth().signInWithPopup(googleAuth).then(function(result) {
            console.log("Logged In prefectly");
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode);
            alert(errorCode);
          
            var errorMessage = error.message;
            console.log(errorMessage);
            alert(errorMessage);
          });
    }

    signOut = () => {
        firebase.auth().signOut()
    }

    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            this.setState({
                status: user ? false : true
            })
        })
    }
    

    render(){
        return(
            <div>
                { this.state.status ?
                    <button onClick={ this.signIn }>Login</button>
                    :
                    <button onClick={ this.signOut }> Logout </button>
                }
            </div>
        )
    }
}

export default Login;