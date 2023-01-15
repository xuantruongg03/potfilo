const initialState = false;

function DarkMode(state = initialState, action) {
    switch (action.type) {
        case 'CHANGE_THEME':
            console.log(state);
            return !state;
        // case 'CLOSE_NOTIFICATION':
        //     return false;
        default:
            return state
    }
}

export default DarkMode;