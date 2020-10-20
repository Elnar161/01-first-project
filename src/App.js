import React from 'react';
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
import Login from './components/Login/Login';


const App = (props) => {
  debugger;
  return (    
    <BrowserRouter> 
      <div className="app-wrapper">
        <HeaderContainer />
        <NavBarContainer />

        <div className="app-wrapper-content">
          <Route path='/login' component={Login} />
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





export default App;
