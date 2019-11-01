import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import '../assets/styles/sass/components/AvailabilityCalendar.scss';

const localizer = momentLocalizer(moment);
const myEventsList = [];
const getNow = () => new Date();

const AvailabilityCalendar = (props) => {
  return (
    <Calendar
      defaultView='month'
      localizer={localizer}
      events={myEventsList}
      startAccessor='start'
      endAccessor='end'
      getNow={getNow}
    />
  );
};

export default AvailabilityCalendar;
