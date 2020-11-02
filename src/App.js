import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import NavBarContainer from './components/Navbar/NavBarContainer';
import UsersContainer from './components/Users/UsersContainer';

import HeaderContainer from './components/Header/HeaderContainer';
import LoginContainer from './components/Login/LoginContainer';
import { connect } from 'react-redux';

import {initializeApp} from './redux/AppReducer';
import Preloader from './components/Common/Preloader/Preloader';
import { Suspense } from 'react';
import { WithSuspense } from './HOC/withSuspense';

//import DialogsContainer from './components/Dialogs/DialogsContainer';
const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//import ProfileContainer from './components/Profile/ProfileContainer';
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

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
          <Switch>
            <Route exact path='/'
              render={() => <Redirect to={'/profile'}/>}/>
            <Route path='/login' component={LoginContainer} />

            <Route path='/dialogs' 
                  render={ WithSuspense(DialogsContainer) }/>

            <Route path='/profile/:userId?' 
                  render={ WithSuspense(ProfileContainer) }/>                             
            
            <Route path='/users' render={ () => <UsersContainer /> }/>

            <Route path='/music' component={Music}/>
            <Route path='/news' component={News}/>
            <Route path='/settings' component={Settings}/>
            <Route path='*'
                   render={() => <div>404 NOT FOUND</div>}/>
          </Switch>
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
