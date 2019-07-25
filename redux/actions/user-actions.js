import axios from '../../components/Requests/FirebaseInstance'
import firebaseApp from '../../components/Requests/FirebaseConfig'

export const UPDATE_USER = 'users:updateUser'
export const SHOW_ERROR = 'users:showError'

export const updateUser = (newUser) => {
  if (newUser) {
    return {
      type: UPDATE_USER,
      payload: {
        user_email: newUser.email,
        user_password: newUser.password
      }
    }
  } else {
    return {
      type: UPDATE_USER,
      payload: null
    }
  }
}

export const authListener = () => {
  return dispatch => {
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(updateUser(user))
      } else {
         dispatch(updateUser(null));
      }
    })
  }
  }

export const showError = () => {
  return {
    type: SHOW_ERROR,
    payload: {
      user: 'Error my dawg'
    }
  }
}


export const apiRequest = () => {
  return dispatch => {
    axios.get('/data').then(response => {
      // dispatch(updateUser(response.newUser))
      console.log(response)
    }, error => {
      dispatch(showError())
    })
  }
}