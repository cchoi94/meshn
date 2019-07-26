import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import * as moment from 'moment'

export default class Log extends React.Component {
  constructor(props) {
    super(props)
  }

  onHandleGymBooking = () => {
    this.props.chooseGym(this.props.data)
    this.props.openModal(this.props.data);
    let decomposedNameArray = this.props.data.name.split('/')
    let gymDocId = decomposedNameArray.splice(decomposedNameArray.length - 1)[0]
    this.props.getBookedTimes(gymDocId, 'gym')
  }

  render() {
    const {data, type} = this.props

  return (
    <div className="container">
      {type === 'booking' &&
        <Paper>
          <div className="logContainer">
            <h1>
              {data.fields.name.stringValue}
            </h1>
            <img src="https://via.placeholder.com/240x90C" alt={`${data.fields.name} image`}/>
              <div>
                Location: {data.fields.location.stringValue}
              </div>
              <div className="availabilityContainer">
                <ExpansionPanel>
                    <ExpansionPanelSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>Hours</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                      <div>
                        {data.fields.availability.arrayValue.values.map((slot, index) => {
                          return(
                            <p className="timeSlot" key={index}>
                              {slot.mapValue.fields.day.stringValue} {slot.mapValue.fields.start_time.stringValue ? `${moment(slot.mapValue.fields.start_time.stringValue, 'HH:mm:ss').format('h:mm a')} - ${moment(slot.mapValue.fields.end_time.stringValue, 'HH:mm:ss').format('h:mm a')}` : slot.mapValue.fields.status.stringValue}
                            </p>
                          )
                        })}
                      </div>
                    </ExpansionPanelDetails>
                  </ExpansionPanel>
              </div>
            <div className="bookBtn">
              <Button onClick={this.onHandleGymBooking} variant="contained" color="primary">
                Book
              </Button>
            </div>
          </div>
        </Paper>
      }
      {(type === 'user' && data) &&
        data.map(log => {
          return (
            <Paper key={log.modified}>
              <div className="logContainer">
                <h1>
                  {log.gym_name}
                </h1>
                <img src="https://via.placeholder.com/240x90C" alt={`${log.gym_name} image`}/>
                <div>
                  <p>Location: {log.gym_location}</p>
                  <p>Time booked: {moment(log.start_time, 'HH:mm:ss').format('h:mm a')} - {moment(log.end_time, 'HH:mm:ss').format('h:mm a')}</p>
                </div>
              </div>
            </Paper>
          )
        })}
      <style jsx>
        {`
          .logContainer {
            padding: 16px !important;
            position: relative
            height: 100%;
            overflow: scroll;
            margin: 16px 0;
          }
          img {
            margin: 16px 0;
          }
          .availabilityContainer {
            margin: 16px 0;
          }
          .availabilityContainer p {
            margin-left: 16px;
          }
          .bookBtn {
            display: flex;
            justify-content: flex-end
          }
        `}
      </style>
    </div>
  );
  }
}