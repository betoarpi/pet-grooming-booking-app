import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Modal from './Modal';
import '../assets/styles/sass/components/DatePicker.scss';

const AvailabilityCalendar = (props) => {
  const [pickedDate, setPickedDate] = useState(new Date());
  const { onCloseModal } = props;

  return (
    <div className='availability'>
      <h5 className='availability__title'>Disponibilidad</h5>
      <DatePicker
        showPopperArrow={false}
        selected={pickedDate}
        onChange={(date) => setPickedDate(date)}
        inline
      />
      <Modal isOpen={true} onClose={onCloseModal} />
    </div>
  );
};

export default AvailabilityCalendar;
