import React from 'react';
import Profile from './Profile';
import { addPostActionCreator, 
    updateNewPostTextActionCreator, 
    getUserProfileThunkCreator,  getStatusThunkCreator, 
    updateStatusThunkCreator, savePhotoThunkCreator,
    saveProfileThunkCreator} from '../../redux/ProfileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/reduxStore';
import { ProfileType } from '../../types/types';

type PropsType = MapStatePropsType & MapDispatchPropsType

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: number;  
        if (!this.props.match){
            userId = this.props.match.params.userId;
        }
        else{
            userId = this.props.authorizedUserId;            
        }
        this.props.getUserProfile(userId);         
        this.props.getStatus(userId);   
    }

    componentDidMount(){            
        this.refreshProfile();
    }


    componentDidUpdate(prevProps: MapStatePropsType){  
        if (this.props.match.params.userId != prevProps.match.params.userId ){
            this.refreshProfile();
        }        
    }

    render(){
        return (                    
            <div>
                <Profile {...this.props} 
                    profileInfo={this.props.profileInfo} 
                    status={this.props.status} 
                    updateStatus={this.props.updateStatus}
                    isOwner={!this.props.match.params.userId}
                    savePhoto={this.props.savePhoto}
                    saveProfile={this.props.saveProfile}/>
                {/* ...this.props  создаст атрибуты для свойств объекта props 
                чтоб прокинуть пропсы в профайл 1 в 1*/}
            </div>
        );
    }
}

// type MatchPropsType = {
//     params: { userId?: number | null}
// }

type MapStatePropsType = {
    profileInfo: ProfileType
    status: string
    authorizedUserId: number
    isAuth: boolean
    match?: any
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return{
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth 
    }
}

type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
    updateNewPostText: (text: string) => void
    getUserProfile: (userId: number) => any
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
    savePhoto: (file: any) => void
    saveProfile: (profile: ProfileType) => void
}

export default compose(
    
    connect<MapStatePropsType, MapDispatchPropsType>(
        mapStateToProps,
        {   addPost: addPostActionCreator, 
            updateNewPostText: updateNewPostTextActionCreator, 
            getUserProfile: getUserProfileThunkCreator,
            getStatus: getStatusThunkCreator, 
            updateStatus: updateStatusThunkCreator, 
            savePhoto: savePhotoThunkCreator,
            saveProfile: saveProfileThunkCreator}
        ),
    withRouter,
    withAuthRedirect
)(ProfileContainer)    