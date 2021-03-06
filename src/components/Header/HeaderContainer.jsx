import React from 'react';
import Header from './Header';

import { getUserDataThunkCreator, logOutUserThunkCreator} from '../../redux/AuthReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component{

    render(){
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
    { logOutUserThunkCreator }
    ) (HeaderContainer);