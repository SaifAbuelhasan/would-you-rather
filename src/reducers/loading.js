import { END_LOADING, START_LOADING } from '../actions/loading';

export default function loading(state = true, action) {
    switch(action.type) {
        case END_LOADING:
            return action.loading;
        case START_LOADING:
            return action.loading;
        default:
            return state;
    }
}