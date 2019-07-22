import React from 'react';
import {NavLink} from 'react-router-dom';
import classes from './Users.module.css';
import userPhoto from './../../assets/img/usersImg.png';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
    <div>
      {pages.map( p => { 
        return <span 
            className={props.currentPage === p && classes.selectedPage}
            onClick={(e) => {props.onPageChanged(p)}}
            >{p}</span>}
        )}  
    </div>
        {
            props.users.map((u => <div key={u.id}>
                <div className={classes.wrappUsers}>
                    <div className={classes.contentOne}>
                        <div>
                            <NavLink to={'/profile' + u.id}>
                                <img className={classes.usersImg} src={u.photos.small != null ? u.photos.small : userPhoto } />
                            </NavLink>
                        </div>
                        <div>
                            {u.follower
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button> 
                            }
                        </div>
                    </div>
                    <div className={classes.contentTwo}>
                        <div>
                            <textarea ></textarea>
                        </div>
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