import {combineReducers} from "redux";

const HEADER_INITIAL_STATE = {
    activePage: 'main',
};

const Header = (state = HEADER_INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default combineReducers({
    header: Header,
});