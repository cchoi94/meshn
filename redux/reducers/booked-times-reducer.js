import { GYM_TIMES_BOOKED, USER_TIMES_BOOKED, SHOW_ERROR } from '../actions/gym-actions'

const bookedTimesReducer = (state = [], {type, payload}) => {
  switch(type) {
    case GYM_TIMES_BOOKED:
      return payload.bookedTimes;
    case USER_TIMES_BOOKED:
      return payload.bookedTimes;
    case SHOW_ERROR:
      return payload.error;
    default: return state
  }
}

export default bookedTimesReducer