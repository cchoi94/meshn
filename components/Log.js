import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';

import * as moment from 'moment'

export default function Log(props) {
  const {data, type, openModal, chooseGym} = props

  const onHandleGymBooking = () => {
    chooseGym(data)
    openModal(data);
  }

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
                Location: {`${data.fields.location.mapValue.fields.street_name.stringValue} ${data.fields.location.mapValue.fields.street_number.stringValue}
                ${data.fields.location.mapValue.fields.street_type.stringValue}`}
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
              <Button onClick={onHandleGymBooking} variant="contained" color="primary">
                Book
              </Button>
            </div>
          </div>
        </Paper>
      }
      {type === 'activity' &&
        <Paper>
          <div className="logContainer">
            <Typography variant="h5">
              {data.name}
            </Typography>
            <img src="https://via.placeholder.com/480x90C" alt={`${data.fields.name} image`}/>
            <Typography variant="p">
              Paper can be used to build surface or other elements for your application.
            </Typography>
          </div>
        </Paper>
      }
      {

      }
      <style jsx>
        {`
          .logContainer {
            padding: 16px !important;
            position: relative
            height: 100%;
            overflow: scroll
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