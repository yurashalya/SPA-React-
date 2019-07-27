const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    messages: [
        { id: 1, message: 'React' },
        { id: 2, message: 'Vue' },
        { id: 3, message: 'Angular' },
        { id: 4, message: 'ES6' },
    ],
    dialogs: [
        { id: 1, name: 'Yura' },
        { id: 2, name: 'Roma' },
        { id: 3, name: 'Tanya' }, 
        { id: 4, name: 'Dasha' },
        { id: 5, name: 'Lena' },
        { id: 6, name: 'Gleb' },
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default: 
            return state;
    }
    
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})



export default dialogsReducer;