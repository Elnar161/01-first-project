import React from 'react';
import Header from './Header';

import { setUserDataActionCreator as setUserData} from '../../redux/AuthReducer';
import Axios from 'axios';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component{

    componentDidMount(){
        Axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{ withCredentials: true })            
            .then(response => { 
                debugger; 
                if (response.data.resultCode === 0) {
                    //userId, email, login
                    let data = response.data.data;
                    let {id, email, login} = response.data.data;//деструктуризация
                    this.props.setUserData(id, email, login);
                }
                
            })        
    }

    render(){
        debugger;
        return(
            <Header {...this.props}/>
        )
    }
}



let mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(
    mapStateToProps,
    { setUserData }
    ) (HeaderContainer);