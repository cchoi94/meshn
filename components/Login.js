import Link from 'next/link';
import Layout from '../components/Layout'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { updateUser, apiRequest } from '../redux/actions/user-actions'
import firebaseApp from './Requests/FirebaseConfig'
import ReCAPTCHA from 'react-google-recaptcha'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField';
import '../styles/login.scss'

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
      <div class="loginPage">
        <h1>Meshn</h1>
        <form className='loginContainer' onSubmit={this.login}>
          <h2>Login</h2>
            <div className="emailContainer">
              <TextField required fullWidth onChange={this.handleChange} type="email" name="email" placeholder="Email"></TextField>
            </div>
            <div className="passwordContainer">
              <TextField required fullWidth onChange={this.handleChange} type="password" name="password" placeholder="Password"></TextField>
            </div>
            <Button type="submit" variant='contained' fullWidth color="primary" className="loginBtn">Login</Button>
            {/* <button onClick={this.signup}>Signup</button> */}
          {/* {this.state.showRecaptcha &&
            <ReCAPTCHA
              sitekey={process.env.SITE_KEY}
              onChange={this.onChange}
            />
          } */}
        </form>
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