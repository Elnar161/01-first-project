import React from 'react';
import Profile from './Profile';
import { addPostActionCreator as addPost, 
    updateNewPostTextActionCreator as updateNewPostText, 
    setProfileInfoActionCreator as setProfileInfo} from '../../redux/ProfileReducer';
import Axios from 'axios';
import { connect } from 'react-redux';
import store from '../../redux/reduxStore';
import { withRouter } from 'react-router-dom';
import {getProfile} from '../../api/API'



class ProfileContainer extends React.Component {

    componentDidMount(){
        debugger;
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        getProfile(userId)
            .then(data => { this.props.setProfileInfo(data);})
    }


    render(){
        debugger;
        return (                    
            <div>
                <Profile {...this.props} />
                {/* ...this.props  создаст атрибуты для свойств объекта props 
                чтоб прокинуть пропсы в профайл 1 в 1*/}
            </div>
        );
    }
}




let mapStateToProps = (state) => {
    return{
        profileInfo: state.profilePage.profileInfo
    }
}

 let WithUrlDataContainerComponent = withRouter(ProfileContainer);

//создает контейнерную компоненту над ProfileContainer
export default connect(
    mapStateToProps,
    { addPost, updateNewPostText, setProfileInfo }
    ) (WithUrlDataContainerComponent);