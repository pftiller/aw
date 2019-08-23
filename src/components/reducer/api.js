const initialState = {
    width: null,
    condition: null,
    pixelRatio: null
};

const api = (state = initialState, action) => {
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
const setWidth = widthDOM => ({ type: 'SET_WIDTH', width: widthDOM });
const setCondition = currentCondition => ({ type: 'SET_CONDITION', condition: currentCondition });
const setAsyncWidth = widthDOM => dispatch => (
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000);
    })
        .then(() => dispatch(setWidth(widthDOM)))
);
const setAsyncCondition = currentCondition => dispatch => (
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000);
    })
        .then(() => dispatch(setCondition(currentCondition)))
);