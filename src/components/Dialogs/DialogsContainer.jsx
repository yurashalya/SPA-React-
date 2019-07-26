
import {updateNewMessageBodyCreator, sendMessageCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

let mapDispatchTooProps = (dispatch) => {
    return {
        sendMessage: () => { dispatch(sendMessageCreator()) },
        updateNewMessageBody: (body) => { dispatch(updateNewMessageBodyCreator(body)) }
    };
};

let AuthRedirectComponent = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps, mapDispatchTooProps) (AuthRedirectComponent);
export default DialogsContainer;