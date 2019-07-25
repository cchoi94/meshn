import Link from 'next/link';
import Layout from '../components/Layout'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { updateUser, apiRequest } from '../redux/actions/user-actions'
import firebaseApp from '../components/Requests/FirebaseConfig'
import Login from '../components/Login'

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    firebaseApp.auth().signOut()
    this.props.onUpdateUser(null)
  }

  
  render() {
    return (
      <div>
        <p>This is the profile page</p>
        {this.props.user ?
          <button onClick={this.logout}>Logout</button>
        :
        <Login />
        }
      </div>
    );
  }
}

const userSelector = createSelector(
  state => state.user,
  user => user
)

const mapStateToProps = createSelector(
  userSelector,
  (user) => ({
    user
  })
);

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
}

export default Layout(connect(mapStateToProps, mapActionsToProps)(Profile))