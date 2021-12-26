import { _getQuestions, _getUsers } from "../backend/_DATA";
import { recieveQuestions } from "./questions";
import { recieveUsers } from "./users";
import { endLoading, startLoading } from "./loading";

export function handleInitialData() {
    return async (dispatch) => {
        const questions = await _getQuestions();
        const users = await _getUsers();
        dispatch(recieveQuestions(questions));
        dispatch(recieveUsers(users));
        dispatch(endLoading());
    }
}