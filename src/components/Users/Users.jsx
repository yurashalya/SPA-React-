import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/img/usersImg.png';

const Users = (props) => {

    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => { 
                props.setUsers(response.data.items); 
        });
    }

    return <div>
        {
            props.users.map((u => <div key={u.id}>
                <div className={classes.wrappUsers}>
                    <div>
                        <div>
                            <img className={classes.usersImg} src={u.photos.small != null ? u.photos.small : userPhoto } />
                        </div>
                        <div>
                            {u.follower
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button> 
                            }
                        </div>
                    </div>
                    <div>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{"u.location.country"}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </div>
                </div>
            </div>))
        }
    </div>
}


export default Users;