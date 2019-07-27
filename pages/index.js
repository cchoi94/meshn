import Link from 'next/link';
import Layout from '../components/Layout'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { updateUser } from '../redux/actions/user-actions'
import { getBookedTimes } from '../redux/actions/gym-actions.js'
import Log from '../components/Log'
import Login from '../components/Login'
import firebaseApp from '../components/Requests/FirebaseConfig'
import AppBar from '../components/AppBar'
import "../styles/style.scss"

class Index extends React.Component {

  constructor(props) {
    super(props)
  }

  logout = () => {
    firebaseApp.auth().signOut()
    this.props.onUpdateUser(null)
  }

  componentDidMount() {
    // this.props.onAuthListener();
    firebaseApp.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.onUpdateUser(user)
        this.props.onGetBookedTimes(this.props.user.user_email, 'user')
      } else {
         this.props.onUpdateUser(null);
      }
    })
  }

  render() {
    return (
      <div>
        {this.props.user ? 
          <div>
            <AppBar title="Activity Log"/>
            <div className="container">
              <Log 
                type="user"
                data={this.props.bookedTimes}
              />
            </div>
          </div>
         : <Login />}
         <style jsx global>{`
            .bottomNav {
               display: ${this.props.user ? null : 'none'}
              }
          `}
          </style>
      </div>
    )
  }

}

const userSelector = createSelector(
  state => state.user,
  user => user
)

const bookedTimesSelector = createSelector(
  state => state.bookedTimes,
  bookedTimes => bookedTimes
)

const mapStateToProps = createSelector(
  userSelector,
  bookedTimesSelector,
  (user, bookedTimes) => ({
    user,
    bookedTimes
  })
);

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onGetBookedTimes: getBookedTimes,
}

export default Layout(connect(mapStateToProps, mapActionsToProps)(Index));