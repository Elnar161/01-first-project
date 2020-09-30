import React from 'react';
import s from './Users.module.css';

let Users = (props) => {
    let arrUsers = props.users.map((u) => 
    <div key={u.id}>
        <span>
            <div>
                <img src="" alt=""/>
            </div>
            <div>
                <button>Follow</button>
            </div>
        </span>
        <span>
            <span>
                <div>
                    <div>

                    </div>
                </div>
            </span>
            <span>
                <div>
                    <div>
                        
                    </div>
                </div>
            </span>
        </span>
    </div>);

    return (
        <div>
            Users
        </div>
    );
}

export default Users;