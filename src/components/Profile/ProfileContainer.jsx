import React from 'react';
import Profile from './Profile';
import { addPostActionCreator as addPost, 
    updateNewPostTextActionCreator as updateNewPostText, 
    getUserProfileThunkCreator} from '../../redux/ProfileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';



class ProfileContainer extends React.Component {

    componentDidMount(){        
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = 2;
        }
        this.props.getUserProfileThunkCreator(userId);            
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
    { addPost, updateNewPostText, getUserProfileThunkCreator }
    ) (WithUrlDataContainerComponent);