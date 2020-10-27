import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import NavBarContainer from './components/Navbar/NavBarContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';

import {initializeApp} from './redux/AppReducer';
import Preloader from './components/Common/Preloader/Preloader';


class App extends Component {

  componentDidMount(){
    this.props.initializeApp();  
  }
  

  render() {
    if(!this.props.initialized){
      return <Preloader/>
    }

  return(   
    <BrowserRouter> 
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBarContainer />

        <div className="app-wrapper-content">
          <Route path='/login' component={LoginContainer} />
          <Route path='/dialogs' render={ () => <DialogsContainer/> }/>
          <Route path='/profile/:userId?' render={ () => <ProfileContainer /> }/>
          <Route path='/users' render={ () => <UsersContainer /> }/>

          <Route path='/music' component={Music}/>
          <Route path='/news' component={News}/>
          <Route path='/settings' component={Settings}/>
        </div>
        
      </div>
    </BrowserRouter>
  );
  }
}



const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

export default  connect(mapStateToProps, {initializeApp})(App);
