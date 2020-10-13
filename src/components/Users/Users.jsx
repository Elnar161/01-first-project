import Axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component{
    
    //если конструктор просто прокидывает пропсы в конструктор родителя
    //тогда его можно опустить. это произойдет автоматом
    constructor(props){
        super(props);
        this.getUsers();
    }
    getUsers = () => {
        if (this.props.users.length === 0) {
            Axios.get("https://social-network.samuraijs.com/api/1.0/users")
                //.then(response => {console.log(response.data.items);})
                .then(response => { this.props.setUsers(response.data.items) })
        }
    }

    //метод render обязателен
    render(){
        let arrUsers = this.props.users.map((u) => 
        <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoURL != null ? u.photoURL : userPhoto} alt="" className={s.userPhoto}/>
                </div>
                <div>
                    {
                        u.followed ? 
                        <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>                     
                        :
                        <button onClick={() => this.props.follow(u.id)}>Follow</button>                     
                    }
                    
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {u.fullName}
                    </div>
                    <div>
                        {u.status}
                    </div>
                </span>
                <span>
                    <div>
                        {"u.location.country"}
                    </div>
                    <div>   
                        {"u.location.city"}                                         
                    </div>
                </span>
            </span>
        </div>);
    
        return (
            <div>
                {/* <button onClick={this.getUsers}>GET USERS</button> */}
                {arrUsers}
            </div>
        );
    }
}

export default Users;