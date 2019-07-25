import Link from 'next/link';
import Layout from '../components/Layout'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { updateUser, authListener } from '../redux/actions/user-actions'
import Log from '../components/Log'
import Login from '../components/Login'
import firebaseApp from '../components/Requests/FirebaseConfig'
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
    this.props.onAuthListener()
  }

  render() {
    return (
      <div>
        <p>Activity Log</p>
        {this.props.user ? 
          <div>
            <Log />
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

const mapStateToProps = createSelector(
  userSelector,
  (user) => ({
    user
  })
);

const mapActionsToProps = {
  onUpdateUser: updateUser,
  onAuthListener: authListener
}

export default Layout(connect(mapStateToProps, mapActionsToProps)(Index));