import * as actionType from '../action/actionType';

export default (state = {}, action) => {
	switch (action.type) {
		case actionType.SELECT_USER:
			const user = action.user;
			return Object.assign = ({}, state, user)
		default: return state;
	}
}