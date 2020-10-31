import React from 'react';
import Profile from './Profile';
import { addPostActionCreator as addPost, 
    updateNewPostTextActionCreator as updateNewPostText, 
    getUserProfileThunkCreator,  getStatusThunkCreator, updateStatusThunkCreator} from '../../redux/ProfileReducer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

    componentDidMount(){            
        let userId = this.props.match.params.userId;
        if (!userId){
            userId = this.props.authorizedUserId;
        }
        this.props.getUserProfileThunkCreator(userId);         
        this.props.getStatusThunkCreator(userId);   
    }


    render(){
        return (                    
            <div>
                <Profile {...this.props} 
                    profile={this.props.profileInfo} 
                    status={this.props.status} 
                    updateStatus={this.props.updateStatusThunkCreator}/>
                {/* ...this.props  создаст атрибуты для свойств объекта props 
                чтоб прокинуть пропсы в профайл 1 в 1*/}
            </div>
        );
    }
}



let mapStateToProps = (state) => {
    return{
        profileInfo: state.profilePage.profileInfo,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

// let AuthRedirectComponent = withAuthRedirect(Profile);

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

// //создает контейнерную компоненту над ProfileContainer
// export default connect(
//     mapStateToProps,
//     { addPost, updateNewPostText, getUserProfileThunkCreator }
//     ) (WithUrlDataContainerComponent);

export default compose(
    connect(
        mapStateToProps,
        { addPost, updateNewPostText, getUserProfileThunkCreator,
             getStatusThunkCreator, updateStatusThunkCreator }
        ),
        withRouter,
        withAuthRedirect
)(ProfileContainer)    