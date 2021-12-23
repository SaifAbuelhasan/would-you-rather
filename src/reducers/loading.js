import { END_LOADING } from '../actions/loading';

export default function loading(state = true, action) {
    switch(action.type) {
        case END_LOADING:
            return false;
        default:
            return state;
    }
}