import React from 'react';
import Profile from './Profile';
import { addPostActionCreator as addPost, 
    updateNewPostTextActionCreator as updateNewPostText, 
    setProfileInfoActionCreator as setProfileInfo} from '../../redux/ProfileReducer';
import Axios from 'axios';
import { connect } from 'react-redux';
import store from '../../redux/reduxStore';



class ProfileContainer extends React.Component {

    componentDidMount(){
        debugger;
        this.getProfile();
    }

    getProfile = () => {
debugger;
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)            
            .then(response => { this.props.setProfileInfo(response.data);})
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

//создает контейнерную компоненту над ProfileContainer
export default connect(
    mapStateToProps,
    { addPost, updateNewPostText, setProfileInfo }
    ) (ProfileContainer);