import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {
   return <div>
        {
            props.users.map((u => <div key={u.id}>
                <div className={classes.wrappUsers}>
                    <div>
                        <div>
                            <img className={classes.usersImg} src={u.photoUlr} />
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
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </div>
                </div>
            </div>))
        }
   </div>
}


export default Users;