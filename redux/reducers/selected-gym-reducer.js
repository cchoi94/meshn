import { GYM_BOOKED } from '../actions/gym-actions'

const selectedGymReducer = (state = [], {type, payload}) => {
  switch(type) {
    case GYM_BOOKED:
      return payload.gym
    default: return state
  }
}

export default selectedGymReducer