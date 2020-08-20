const initialState = {
	data: []
};

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case "ADD_NOTE":
			return {
				...state,
				data: [...state.data,(action.payload.content)],
			};
		case "REMOVE_NOTE_SUCCESS":
			return {
				...state,
				data: [...state.data.filter(item => item.id !== action.payload.id)],
			};
		case "FETCH_SUCCESS":
			return {
				...state,
				data: [...state.data, ...action.payload.data.allNotes],
			};
		default:
			return state;
	}
};

export default rootReducer;
