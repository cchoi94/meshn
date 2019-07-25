import Layout from '../components/Layout'
import { createSelector } from 'reselect'
import { connect } from 'react-redux'
import { bookGym, fetchGymsRequest } from '../redux/actions/gym-actions.js'
import Log from '../components/Log'
import Login from '../components/Login'
import Modal from '../components/Modal'

class Book extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      selectedGym: {}
    }
  }

  componentDidMount() {
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
                  />
              )

            })
        :
        <Login />
        }
        {this.state.isModalOpen && <Modal modalState={this.state.isModalOpen} modalAction={this.openModal} data={this.props.gym} type="booking"/>}
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

const mapStateToProps = createSelector(
  gymSelector,
  bookedGymSelector,
  userSelector,
  (gyms, gym, user) => ({
    gyms,
    gym,
    user
  })
);

const mapActionsToProps = {
  onBookGym: bookGym,
  onFetchGymsRequest: fetchGymsRequest
}

export default Layout(connect(mapStateToProps, mapActionsToProps)(Book));