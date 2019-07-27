
import {sendMessageCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../Hoc/withAuthRedirect';
import { compose } from 'redux';



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    };
};

let mapDispatchTooProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => { dispatch(sendMessageCreator(newMessageBody)) }
    };
};

export default compose(
    connect(mapStateToProps, mapDispatchTooProps),
    // withAuthRedirect
)(Dialogs);