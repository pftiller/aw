const initialState = {
    width: null,
    condition: null
};

export const api = (state = initialState, action) => {
	switch (action.type) {
        case 'SET_WIDTH':
        return {
            ...state,
            width: action.width
        }
        case 'SET_CONDITION':
        return {
            ...state,
            condition: action.condition
        };
		default:
			return state;
	}
};
export const setWidth = widthDOM => ({ type: 'SET_WIDTH', width: widthDOM });
export const setCondition = currentCondition => ({ type: 'SET_CONDITION', condition: currentCondition });

export const setAsyncWidth = widthDOM => dispatch => (
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000);
    })
        .then(() => dispatch(setWidth(widthDOM)))
);
export const setAsyncCondition = currentCondition => dispatch => (
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000);
    })
        .then(() => dispatch(setCondition(currentCondition)))
);