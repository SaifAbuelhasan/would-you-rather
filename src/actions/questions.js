export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';

// action creator
export function recieveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}