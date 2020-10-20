import React from 'react';
import Header from './Header';

import { getUserDataThunkCreator} from '../../redux/AuthReducer';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component{

    componentDidMount(){
        this.props.getUserDataThunkCreator();       
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
    { getUserDataThunkCreator }
    ) (HeaderContainer);