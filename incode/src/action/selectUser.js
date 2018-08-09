import * as actionType from './actionType.js';

export default (user) => {
    return {
        type: actionType.SELECT_USER,
        user,
    }
}