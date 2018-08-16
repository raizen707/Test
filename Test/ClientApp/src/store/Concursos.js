const requestConcursoType = 'REQUEST_WEATHER_FORECASTS';
const receiveConcursoType = 'RECEIVE_WEATHER_FORECASTS';
const initialState = { concurso: [], isLoading: false };

export const actionCreators = {
    requestConcurso: startDateIndex => async (dispatch, getState) => {
        if (startDateIndex === getState().concurso.startDateIndex) {
            return;
        }

        dispatch({ type: requestConcursoType, startDateIndex });

        const url = `api/ConcursosData/ObtenerConcursos?startDateIndex=${startDateIndex}`;
        const response = await fetch(url);
        const concurso = await response.json();

        dispatch({ type: receiveConcursoType, startDateIndex, concurso });
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
            concurso: action.concurso,
            isLoading: false
        };
    }

    return state;
};
