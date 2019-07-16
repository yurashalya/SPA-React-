import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from './../../assets/img/usersImg.png';


class Users extends React.Component {

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => { 
                    this.props.setUsers(response.data.items); 
            });
        } 
    };

    render() {
        return <div>
        <button onClick={this.getUsers}>Get Users</button>
        {
            this.props.users.map((u => <div key={u.id}>
                <div className={classes.wrappUsers}>
                    <div>
                        <div>
                            <img className={classes.usersImg} src={u.photos.small != null ? u.photos.small : userPhoto } />
                        </div>
                        <div>
                            {u.follower
                                ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> 
                                : <button onClick={() => {this.props.follow(u.id)}}>Follow</button> 
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
}


export default Users;