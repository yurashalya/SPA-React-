import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Nav/Nav';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';



const App = (props) => {
  return (
      <div className="app-wrapper"> 
          <HeaderContainer/>
          <Nav/>
          <div className="app-wrapper-content"> 
            <Route path="/dialogs" render = { () => <DialogsContainer /> } />
            <Route path="/profile/:userId?" render = { () => <ProfileContainer /> } />
            <Route path="/users" render = { () => <UsersContainer /> } />
          </div>
      </div>   
    
    
  )
}



export default App;
