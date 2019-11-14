import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import BookingnModal from './BookingModal';
import '../assets/styles/sass/components/DatePicker.scss';

const AvailabilityCalendar = (props) => {
  const [pickedDate, setPickedDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);

  function handleSelect() {
    setModalOpen(true);
  }

  function handleClose() {
    setModalOpen(false);
  }

  return (
    <div className='availability'>
      <h5 className='availability__title'>
        Disponibilidad
      </h5>
      <DatePicker
        showPopperArrow={false}
        selected={pickedDate}
        onChange={(date) => setPickedDate(date)}
        onSelect={handleSelect}
        inline
      />
      <BookingnModal modalOpen={modalOpen} onClose={handleClose} />
    </div>
  );
};

export default AvailabilityCalendar;
