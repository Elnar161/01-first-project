import Axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user.png'

class Users extends React.Component{
    
    //если конструктор просто прокидывает пропсы в конструктор родителя
    //тогда его можно опустить. это произойдет автоматом
    constructor(props){
        super(props);        
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            debugger;
            //setTimeout(
            //    () => {
            Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                //.then(response => {console.log(response.data.items);})
                .then(response => { this.props.setUsers(response.data.items, response.data.totalCount) })
            //}, 5000)
        }
    }

    componentDidMount(){
        //вызывается сразу после монтирования (то есть, вставки 
        //компонента в DOM). В этом методе должны происходить действия, 
        //которые требуют наличия DOM-узлов. 
        //Это хорошее место для создания сетевых запросов.
        this.getUsers();
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
        //.then(response => {console.log(response.data.items);})
        .then(response => { this.props.setUsers(response.data.items, response.data.totalCount) })        
    }

    //метод render обязателен
    render(){
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        
        let arrPages = [];
        
        for (let i = 1; i <= pagesCount; i++) {
            let el = <span className={this.props.currentPage === i && s.selectedPage} 
                           onClick={(e) => { this.onPageChanged(i); }}>{i}</span>;
            arrPages.push(el);
        }

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
                        {u.name}
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
                <div>
                    {arrPages}
                </div>
                <div>
                    {arrUsers}
                </div>
            </div>
        );
    }
}

export default Users;