export const END_LOADING = 'END_LOADING';

// action creator
export function endLoading() {
    return {
        type: END_LOADING,
        laoding: false
    }
}