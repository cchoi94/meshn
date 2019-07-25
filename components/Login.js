import Link from 'next/link';
import Layout from '../components/Layout'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { updateUser, apiRequest } from '../redux/actions/user-actions'
import firebaseApp from './Requests/FirebaseConfig'
import ReCAPTCHA from 'react-google-recaptcha'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      showRecaptcha: false
    }
  }

  handleChange = (e) => {
    this.setState({ [e.target.name] : e.target.value })
  }

  login = (e) => {
    e.preventDefault()
    firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((response) => {
      this.props.onUpdateUser({
        user_email: this.state.email,
        user_password: this.state.password
      })
    }).catch(error => {
      console.log(error)
    })
  }

  signup = (e) => {
    e.preventDefault();
    // console.log(process.env.SITE_KEY)
    // this.setState({showRecaptcha: true})
    // firebaseApp.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(response => {
    //   this.props.onUpdateUser({
    //     user_email: this.state.email,
    //     user_password: this.state.password
    //   })
    // }).catch(error => {
    //   console.log(error)
    // })
  }

  onChange = (value) => {
    console.log(value)
  }
  
  render() {
    return (
      <div>
        <p>This is the Login page</p>
        <div>
          <div className="emailContainer">
            <label>Email Address</label>
            <input onChange={this.handleChange} type="email" name="email" placeholder="Enter email"></input>
          </div>
          <div className="passwordContainer">
            <label>Password</label>
            <input onChange={this.handleChange} type="password" name="password" placeholder="Enter password"></input>
          </div>
          <button type="submit" onClick={this.login}>Login</button>
          <button onClick={this.signup}>Signup</button>
        </div>
        {this.state.showRecaptcha &&
          <ReCAPTCHA
            sitekey={process.env.SITE_KEY}
            onChange={this.onChange}
          />
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

export default Layout(connect(mapStateToProps, mapActionsToProps)(Login))