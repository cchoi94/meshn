import Link from 'next/link';
import Layout from '../components/Layout'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { updateUser } from '../redux/actions/user-actions'
import firebaseApp from '../components/Requests/FirebaseConfig'
import Login from '../components/Login'
import Router from 'next/router'
import AppBar from '../components/AppBar'
import Button from '@material-ui/core/Button'

class Profile extends React.Component {
  constructor(props) {
    super(props);
  }

  logout = () => {
    firebaseApp.auth().signOut()
    this.props.onUpdateUser(null)
  }

  componentDidMount() {
    if (!this.props.user || this.props.user === "") {
      Router.push('/')
    }
  }

  
  render() {
    return (
      <div>
        <AppBar title="Profile"/>
        {this.props.user ?
          <Button variant="contained" color="primary" onClick={this.logout}>Logout</Button>
        :
        null
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
}

export default Layout(connect(mapStateToProps, mapActionsToProps)(Profile))