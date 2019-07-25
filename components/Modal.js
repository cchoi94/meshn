import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Calendar from 'react-calendar/dist/entry.nostyle'
import '../styles/calendar.scss'

class SimpleModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDateSelected: false,
      selectedDate: null
    }
  }

  onCalendarChange = (event) => {
    console.log(event)
  }

  onDisableTile = ({date, view}) => {

    let currentYear = date.getFullYear()
    let currentMonth = date.getMonth()
    let disabledDaysArray = []
    let disabledDates = []

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

    return (view === 'month') && // Block day tiles only
      disabledDates.some(disabledDate =>
        date.getFullYear() === disabledDate.getFullYear() &&
        date.getMonth() === disabledDate.getMonth() &&
        date.getDate() === disabledDate.getDate()
    )}

  onCalendarDateClick = (day) => {
    this.setState({
      isDateSelected: true,
      selectedDate: day
    })

  }

  render() {
    return (
      <div>
        {this.props.type === 'booking' &&
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.props.modalState}
            onClose={this.props.modalAction}
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

                </div>
              }



              {/* <button onClick={test}>log this.props</button> */}

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
        <style jsx>{`
          .modalContainer {
            background: #fff;
            margin: 16px;
            padding: 16px
          }
        `}
        </style>
      </div>
    );

  }
}

export default SimpleModal