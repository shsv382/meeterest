const initialState = {
	selfGender: "male",
    findingGender: "female"
}

export const setSelfGender = (state=initialState, action={}) => {
	switch (action.type) {
		case "SET_GENDER":
			return Object.assign({}, state, {selfGender: action.payload});
		default:
			return state;
	}
}

const initialStateUsers = {
	isPending: false,
	users: [],
	error: ''
}

export const requestUsers = (state=initialStateUsers, action={}) => {
	switch (action.type) {
		case 'REQUEST_PENDING':
			return Object.assign({}, state, {isPending: true})
		case 'REQUEST_SUCCESS':
			return Object.assign({}, state, {users: action.payload, isPending: false})
		case 'REQUEST_ERROR':
			return Object.assign({}, state, {error: action.payload, isPending: false})
		default:
			return state;
	}
}