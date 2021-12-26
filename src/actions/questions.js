import { _getQuestions, _getUsers, _saveQuestion, _saveQuestionAnswer } from "../backend/_DATA";
import { startLoading } from "./loading";
import { handleInitialData } from "./shared";

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ANSWER_QUESTION = 'ANSWER_QUESTION';
export const ASK_QUESTION = 'ASK_QUESTION';

// action creator
export function recieveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

export function answerQuestion({ authedUser, qid, answer }) {
    return async (dispatch) => {
        dispatch({
            type: ANSWER_QUESTION,
            authedUser,
            qid,
            answer
        })
        try {
            await _saveQuestionAnswer({ authedUser, qid, answer })
        } catch(e) {
            alert("There was an error")
        }
    }
}

export function askQuestion(question) {
    return async (dispatch) => {
        dispatch(startLoading());
        try {
            await _saveQuestion(question);
        } catch(e) {
            alert("There was an error");
            return;
        }
        const questions = await _getQuestions();
        const users = await _getUsers();
        dispatch(handleInitialData());
    }
}
