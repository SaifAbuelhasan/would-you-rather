export const END_LOADING = 'END_LOADING';
export const START_LOADING = 'START_LOADING'
// action creator
export function endLoading() {
    return {
        type: END_LOADING,
        loading: false
    }
}

export function startLoading() {
    return {
        type: START_LOADING,
        loading: true
    }
}

