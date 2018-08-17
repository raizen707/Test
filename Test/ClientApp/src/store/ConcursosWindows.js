const requestConcursoType = 'REQUEST_WEATHER_FORECASTS';
const receiveConcursoType = 'RECEIVE_WEATHER_FORECASTS';
const initialState = { concursoWindows: [], isLoading: false };

export const actionCreators = {
    requestConcurso: startDateIndex => async (dispatch, getState) => {
        if (startDateIndex === getState().concursoWindows.startDateIndex) {
            return;
        }

        dispatch({ type: requestConcursoType, startDateIndex });

        const url = `http://localhost:54716/api/concursos`;
        const response = await fetch(url);
        const concursoWindows = await response.json();

        dispatch({ type: receiveConcursoType, startDateIndex, concursoWindows });
    }
};

export const reducer = (state, action) => {
    state = state || initialState;

    if (action.type === requestConcursoType) {
        return {
            ...state,
            startDateIndex: action.startDateIndex,
            isLoading: true
        };
    }

    if (action.type === receiveConcursoType) {
        return {
            ...state,
            startDateIndex: action.startDateIndex,
            concursoWindows: action.concursoWindows,
            isLoading: false
        };
    }

    return state;
};
