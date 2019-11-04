import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import '../assets/styles/sass/components/DatePicker.scss';

const AvailabilityCalendar = (props) => {
  const [pickedDate, setPickedDate] = useState(new Date());

  return (
    <DatePicker
      showPopperArrow={false}
      selected={pickedDate}
      onChange={(date) => setPickedDate(date)}
      inline
    />
  );
};

export default AvailabilityCalendar;
