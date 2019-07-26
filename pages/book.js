import Layout from '../components/Layout'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { bookGym, fetchGymsRequest, submitGymBooking, getBookedTimes } from '../redux/actions/gym-actions.js'
import {authListener} from '../redux/actions/user-actions'
import Log from '../components/Log'
import Login from '../components/Login'
import Modal from '../components/Modal'
import Router from 'next/router'


class Book extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      selectedGym: {}
    }
  }

  componentDidMount() {
    if (this.props.onAuthListener()) {
      Router.push('/')
    }
    this.props.onFetchGymsRequest();
  }

  openModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
    
  }

  render() {
  
    return (
      <div>
        <p>Booking Page</p>
        {this.props.user ?
          this.props.gyms &&
            this.props.gyms.map((gym, index) => {
              return (
                <Log 
                    data={gym}
                    type='booking'
                    key={gym.name}
                    openModal={this.openModal}
                    chooseGym={this.props.onBookGym}
                    getBookedTimes={this.props.onGetBookedTimes}
                  />
              )

            })
        :
        <Login />
        }
        {this.state.isModalOpen && <Modal modalState={this.state.isModalOpen} modalAction={this.openModal} data={this.props.gym}
        user={this.props.user}
        submitGymBooking={this.props.onSubmitGymBooking}
        bookedTimes={this.props.bookedTimes} type="booking"/>}
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

const gymSelector = createSelector(
  state => state.gyms,
  gyms => gyms
)

const bookedGymSelector = createSelector(
  state => state.gym,
  gym => gym
)

const userSelector = createSelector(
  state => state.user,
  user => user
)

const bookedTimesSelector = createSelector(
  state => state.bookedTimes,
  bookedTimes => bookedTimes
)

const mapStateToProps = createSelector(
  gymSelector,
  bookedGymSelector,
  userSelector,
  bookedTimesSelector,
  (gyms, gym, user, bookedTimes) => ({
    gyms,
    gym,
    user,
    bookedTimes
  })
);

const mapActionsToProps = {
  onBookGym: bookGym,
  onFetchGymsRequest: fetchGymsRequest,
  onSubmitGymBooking: submitGymBooking,
  onGetBookedTimes: getBookedTimes,
  onAuthListener: authListener
}

export default Layout(connect(mapStateToProps, mapActionsToProps)(Book));