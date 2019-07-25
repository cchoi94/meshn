import axios from '../../components/Requests/FirebaseInstance'
export const SET_GYMS = 'gyms:setGyms'
export const GYM_BOOKED = 'gym:gymBooked'
export const SHOW_ERROR = 'gyms:showError'

export const setGymData = (gyms) => {
  return {
    type: SET_GYMS,
    payload: {
      gyms: gyms
    }
  }
}

export const bookGym = (gym) => {
  console.log(gym)
  return {
    type: GYM_BOOKED,
    payload: {
      gym: gym
    }
  }
}

export const showError = () => {
  return {
    type: SHOW_ERROR,
    payload: {
      error: 'Error when fetching gyms'
    }
  }
}


export const fetchGymsRequest = () => {
  return dispatch => {
    axios.get('/gyms').then(response => {
      dispatch(setGymData(response.data.documents))
    }, error => {
      dispatch(showError())
    })
  }
}