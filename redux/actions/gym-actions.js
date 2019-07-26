import axios from '../../components/Requests/FirebaseInstance'
export const SET_GYMS = 'gyms:setGyms'
export const GYM_BOOKED = 'gym:gymBooked'
export const SHOW_ERROR = 'gyms:showError'
export const GYM_TIMES_BOOKED = 'gym:timesBooked'
export const USER_TIMES_BOOKED = 'user:timesBooked'

export const setGymData = (gyms) => {
  return {
    type: SET_GYMS,
    payload: {
      gyms: gyms
    }
  }
}

export const bookGym = (gym) => {
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

export const setGymBookedTimes = (bookedTimes) => {
  return {
    type: GYM_TIMES_BOOKED,
    payload: {
      bookedTimes
    }
  }
}

export const setUserBookedTimes = (bookedTimes) => {
  return {
    type: USER_TIMES_BOOKED,
    payload: {
      bookedTimes
    }
  }
}

export const submitGymBooking = (postData) => {
  return dispatch => {
    axios.post('/booked_logs',
    {
      fields: 
        postData
    } 
    ).then(response => {
    }, error => {
      console.log(error)
    })
  }
}

export const getBookedTimes = (ref, type) => {
  return dispatch => {
    axios.get('/booked_logs').then(response => {
      let bookedDaysArray = []
      if (response.data.documents) {
        if (type === 'gym') {
          response.data.documents.forEach(bookedTimes => {
            if (bookedTimes.fields.gym_id.stringValue === ref) {
              bookedDaysArray.push(bookedTimes.fields.selected_date.stringValue)
            }
          })
          dispatch(setGymBookedTimes(bookedDaysArray))
        } else if (type === 'user') {
          response.data.documents.forEach(bookedTimes => {
            if (bookedTimes.fields.user_email.stringValue === ref) {
              bookedDaysArray.push({
                day: bookedTimes.fields.selected_date.stringValue,
                start_time: bookedTimes.fields.selected_start_time.stringValue,
                end_time: bookedTimes.fields.selected_end_time.stringValue,
                gym_name: bookedTimes.fields.gym_name.stringValue,
                gym_location: bookedTimes.fields.gym_location.stringValue,
                modified: bookedTimes.fields.modified.stringValue
              })
            }
          })
            dispatch(setUserBookedTimes(bookedDaysArray))
        }
      }
    }, error => {
      dispatch(showError())
    })
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