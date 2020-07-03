import React, {Component} from 'react';
import axios from 'axios';
import LoginForm from './containers/Login/LoginForm'
import Layout from './Layout';
import appConfig from './appConfig'

const welcomeText = "Welcome, Please Sign in"
class App extends Component {

  
  state = {
    stateObj:{
      username:"",
      password:"",
      loggedIn:null,
      pageLoaded:false,
      text: welcomeText,
      loginDisabled:true,
      errorMessage:null,
      isLoading:false
    },
  }

  componentDidMount(){
    axios.get(appConfig.serverURL+'/Login')
      .then((response) => {
        this.handleServerResponse(response, welcomeText);
      })
  }

  handleServerResponse = (response, textVal) =>{
    var loggedInVal=false;
    var error = null;    
    if(response.data.loggedIn === true){
      loggedInVal=true;
      textVal = "Welcome, Tejender!"
    }
    else{
      error = response.data.error;
    }
    this.setState({
      stateObj:{
        ...this.state.stateObj,
        loggedIn:loggedInVal,
        errorMessage:error,
        text:textVal,
        pageLoaded:true,
        isLoading:false
      }
    })

    console.log(response.data);

  }

  loginHandler = () => {
    console.log('start login Handler');
    console.log(this.state);

    this.setState({
      stateObj:{
        ...this.state.stateObj,
        text:"loading",
        isLoading:true
      }
    }, () => {
      console.log('login Handler 2');
      console.log(this.state);
      var parameters= {
        username:this.state.stateObj.username,
        password:this.state.stateObj.password
      }    
        axios.post(appConfig.serverURL+'/Login',null,{ params:parameters})
        .then((response) => {
          this.handleServerResponse(response,"Username and Password Don't match");
        })
      });

    
  }

  logoutHandler = () => {
    this.setState({
      stateObj:{
        ...this.state.stateObj,
        username:"",
        password:"",
        pageLoaded:false,
        isLoading:false
      }
    }, ()=>{
      axios.get(appConfig.serverURL+'/Logout')
      .then((response) => {
        this.handleServerResponse(response,welcomeText);
      })
    });

    
  }

  onKeyDownHandler = (key) => {
    if(key.keyCode===13)
      this.loginHandler();
  }

  usernameChangeHandler = (event) => {
    let loginDisabledVal=false;
    if(this.state.stateObj.password.length > 3 && event.target.value.length>3){
      loginDisabledVal=false;
    }
    else{
      loginDisabledVal=true;
    }
  this.setState({
    stateObj:{
      ...this.state.stateObj,
      username:event.target.value,
      loginDisabled:loginDisabledVal
    }
  });    
}

  passwordChangeHandler = (event) => {
    let loginDisabledVal=false;
    if(this.state.stateObj.username.length > 3 && event.target.value.length>3){
      loginDisabledVal=false;
    }
    else{
      loginDisabledVal=true;
    }
    this.setState({
      stateObj:{
        ...this.state.stateObj,
        password:event.target.value,
        loginDisabled:loginDisabledVal
      }
    });
  }


  render(){
    return (
        
          <div>
            {this.state.stateObj.pageLoaded?
            this.state.stateObj.loggedIn?
              <div>
                <Layout
                  logoutHandler = {this.logoutHandler}
                />
              </div>
              :
              <div>
                <LoginForm
                  onKeyDownHandler={this.onKeyDownHandler}
                  username={this.state.stateObj.username}
                  password={this.state.stateObj.password}
                  logoutHandler={this.logoutHandler}
                  loginHandler={this.loginHandler}
                  isLoading={this.state.stateObj.isLoading}
                  passwordChangeHandler={this.passwordChangeHandler}
                  usernameChangeHandler={this.usernameChangeHandler}
                  loginDisabled={this.state.stateObj.loginDisabled}
                  errorMessage={this.state.stateObj.errorMessage}
                  text={this.state.stateObj.text}
                />
              </div>
              
                :
              <div>
                <img height="50px" width="50px" src="../logo512.png"></img>
              </div>
            }
          </div>
    );  
  }
}

export default App;
