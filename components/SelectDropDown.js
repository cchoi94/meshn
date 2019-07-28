import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

export default function SimpleSelect(props) {
  const [values, setValues] = React.useState({
    timeSlot: null
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
    props.onSelectedTimeslot(event.target.value)
  }

  return (
    <div>
      {props.type === 'booking:timeslots' &&
        <FormControl style={{width: '100%'}}>
           <InputLabel htmlFor="age-label-placeholder">
              Select available time
            </InputLabel>
            <Select
              onChange={handleChange}
              displayEmpty
              value={values.timeSlot}
              name='timeSlot'
            >
              {
                props.data.map(timeSlot => {
                  return (
                    <MenuItem key={timeSlot} value={timeSlot}>{`${timeSlot.startTime} - ${timeSlot.endTime}`}</MenuItem>
                  )
                })
              }
            </Select>
        </FormControl>
      }
    </div>
  )

}

// `${moment(timeSlot.mapValue.fields.start_time.stringValue, 'HH:mm:ss').format('h:mm a')} - ${moment(timeSlot.mapValue.fields.end_time.stringValue, 'HH:mm:ss').format('h:mm a')}`