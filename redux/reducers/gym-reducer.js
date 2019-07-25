import { SET_GYMS, GYM_BOOKED, SHOW_ERROR } from '../actions/gym-actions'

const gymReducer = (state = [], {type, payload}) => {
  switch(type) {
    case SET_GYMS:
      return payload.gyms;
    case SHOW_ERROR:
      return payload.error;
    default: return state
  }
}

export default gymReducer