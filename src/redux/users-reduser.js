const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
  users: [
    {
      id: 1,
      photoUlr:
        "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png",
      follower: false,
      fullName: "Roma",
      status: "React",
      location: { city: "Kiev", country: "UA" }
    },
    {
      id: 2,
      photoUlr:
        "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png",
      follower: true,
      fullName: "Sasha",
      status: "Vue",
      location: { city: "Kharkiv", country: "UA" }
    },
    {
      id: 3,
      photoUlr:
        "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png",
      follower: true,
      fullName: "Yura",
      status: "Angular",
      location: { city: "Lviv", country: "UA" }
    },
    {
      id: 4,
      photoUlr:
        "https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png",
      follower: false,
      fullName: "Dima",
      status: "jQuery ",
      location: { city: "Dnipro", country: "UA" }
    }
  ],
  newPostText: "Learn React"
};

const userReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, follower: true };
          }
          return u;
        })
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return { ...u, follower: false };
          }
          return u;
        })
      };
    case SET_USERS:
      return {
        ...state,
        users: [...state.users, ...action.users]
      };

    default:
      return state;
  }
};

export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});


export default userReducer;