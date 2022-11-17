const initialState = false;

function NotificationReducer(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_THEME':
            return true;
        case 'CLOSE_NOTIFICATION':
            return false;
        default:
            return state
    }
}

export default NotificationReducer;