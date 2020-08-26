import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';



const App = (props) => {
  debugger;
  return (    
    <BrowserRouter> 
      <div className="app-wrapper">
        <Header/>
        <Navbar/>

        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <Dialogs dialogsPageState={props.appState.dialogsPage}/> }/>
          <Route path='/profile' render={() => <Profile profilePageState={props.appState.profilePage}/> }/>
          <Route path='/music' component={Music}/>
          <Route path='/news' component={News}/>
          <Route path='/settings' component={Settings}/>
        </div>
        
      </div>
    </BrowserRouter>
  );
}





export default App;
