import React from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Calendar from 'react-calendar/dist/entry.nostyle';
import DropDown from './SelectDropDown';
import * as moment from 'moment';
import '../styles/calendarModal.scss';
import Swal from 'sweetalert2'

class SimpleModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDateSelected: false,
      selectedDate: null,
      selectedDateTimeSlots: [],
      userSelectedTimeSlot: null
    }
  }

  // onCalendarChange = (event) => {
    // console.log(event)
  // }

  onDisableTile = ({date, view}) => {
    let currentYear = date.getFullYear()
    let currentMonth = date.getMonth()
    let disabledDaysArray = []
    let disabledDates = []
    let convertedTimesArray = []

    const numberOfdaysInMonth = new Date(currentYear, currentMonth, 0).getDate()

    this.props.data.fields.availability.arrayValue.values.forEach(timeSlot => {
      if(timeSlot.mapValue.fields.status.stringValue === 'closed') {
        disabledDaysArray.push(parseInt(timeSlot.mapValue.fields.day_value.integerValue))
      }
    })

    for (let i = 1; i <= numberOfdaysInMonth + 2; i++) {
      if(disabledDaysArray.includes(new Date(currentYear, currentMonth, i).getDay())) {
        disabledDates.push(new Date(currentYear, currentMonth, i))
      }
    }

    this.props.bookedTimes.forEach(bookedTimes => {
      convertedTimesArray.push(new Date (bookedTimes))
        
      disabledDates.concat(convertedTimesArray)
    });

    disabledDates = disabledDates.concat(convertedTimesArray)

    return (view === 'month') && // Block day tiles only
      disabledDates.some(disabledDate =>
        date.getFullYear() === disabledDate.getFullYear() &&
        date.getMonth() === disabledDate.getMonth() &&
        date.getDate() === disabledDate.getDate()
    )
  }

  onCalendarDateClick = (day) => {
    const selectedDateTimeSlots = []
    this.setState({
      isDateSelected: true,
      selectedDate: day,
      selectedDateTimeSlots
    })
    this.props.data.fields.availability.arrayValue.values.forEach(timeSlot => {
      if(parseInt(timeSlot.mapValue.fields.day_value.integerValue) === day.getDay()) {
        selectedDateTimeSlots.push(
          {startTime: moment(timeSlot.mapValue.fields.start_time.stringValue, 'HH:mm:ss').format('h:mm a'), 
          endTime: moment(timeSlot.mapValue.fields.end_time.stringValue, 'HH:mm:ss').format('h:mm a')}
        )
        this.setState({
          selectedDateTimeSlots
        })
      }
    })
  }

  onSelectedTimeslot = (selectedTime) => {
    let convertedSelectedTime = {}

    convertedSelectedTime.startTime = moment(selectedTime.startTime, 'HH:mm a').format('HH:mm:ss')

    convertedSelectedTime.endTime = moment(selectedTime.endTime, 'HH:mm a').format('HH:mm:ss')

    this.setState({
      userSelectedTimeSlot: convertedSelectedTime
    })
  }

  onHandleBookingSubmit = () => {
    let postData = {}
    let gymDocId = ''

    let convertedDate = this.state.selectedDate.toString().slice(0,15)

    let convertedStartTime = moment(this.state.userSelectedTimeSlot.startTime, 'HH:mm:ss').format('HH:mm a')

    let convertedEndTime = moment(this.state.userSelectedTimeSlot.endTime, 'HH:mm:ss').format('HH:mm a')


    if (this.state.userSelectedTimeSlot && this.state.selectedDate && this.props.user){
      let decomposedNameArray = this.props.data.name.split('/')
      
      Swal.fire({
      title: `Booking Confirmation`,
      html: `Selected Day: ${convertedDate} </br> Selected Time ${convertedStartTime} - ${convertedEndTime}`,
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Confirm it!',
      className: 'swal'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Booked!',
          'Your event has been scheduled',
          'success'
        )

        gymDocId = decomposedNameArray.splice(decomposedNameArray.length - 1)[0]

        postData.user_email = {stringValue: this.props.user.user_email};

        postData.selected_start_time = {stringValue: this.state.userSelectedTimeSlot.startTime}

        postData.selected_end_time = {stringValue: this.state.userSelectedTimeSlot.endTime}

        postData.selected_date = {stringValue: this.state.selectedDate}

        postData.modified = { stringValue: new Date()}

        postData.gym_name = {stringValue: this.props.data.fields.name.stringValue}
        
        postData.gym_location = {stringValue: this.props.data.fields.location.stringValue}

        postData.gym_id = {
          stringValue: gymDocId
        }
        this.props.modalAction()

        this.props.submitGymBooking(postData)
      }
    })

    }


  }

  render() {
    return (
      <div className="modalContainer">
        {this.props.type === 'booking' &&
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.props.modalState}
            onClose={this.props.modalAction}
            className="modalBox"
          >
            <div className="modalContainer">
              {this.props.data &&
                <div>
                  <h2>Schedule with {this.props.data.fields.name.stringValue}</h2>
                  <Calendar
                    onChange={this.onCalendarChange}
                    tileClassName={"calTile"}
                    tileDisabled={this.onDisableTile}
                    onClickDay={this.onCalendarDateClick}
                  />
                  {this.state.isDateSelected &&
                    <div className='dropdown'>
                      <DropDown
                        data={this.state.selectedDateTimeSlots}
                        type={'booking:timeslots'}
                        onSelectedTimeslot={this.onSelectedTimeslot}
                      />
                    </div>
                  }
                </div>
              }
              {this.state.userSelectedTimeSlot &&
                <Button onClick={this.onHandleBookingSubmit} fullWidth disabled={!this.state.userSelectedTimeSlot} variant="contained" color="primary">Book</Button>
              }
            </div>
          </Modal>
        }
        {/* <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.modalState}
          onClose={this.props.modalAction}
        >
          <div className="modalContainer">
            This is a modal
            <button onClick={test}>log this.props</button>
          </div>
        </Modal> */}
      </div>
    );

  }
}

export default SimpleModal