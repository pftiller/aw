const initialState = {
    width: null
};

export const api = (state = initialState, action) => {
	switch (action.type) {
        case 'SET_WIDTH':
        return {
            ...state,
            width: action.width
        };
		default:
			return state;
	}
};
export const setWidth = widthDOM => ({ type: 'SET_WIDTH', width: widthDOM });

export const setAsyncWidth = widthDOM => dispatch => (
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 2000);
    })
        .then(() => dispatch(setWidth(widthDOM)))
);
