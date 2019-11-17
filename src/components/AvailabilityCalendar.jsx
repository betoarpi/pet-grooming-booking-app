import React, { useState } from 'react';
import { connect } from 'react-redux';
import DatePicker, { registerLocale } from 'react-datepicker';
import es from 'date-fns/locale/es';
import { selectedDate } from '../actions/index';
import BookingnModal from './BookingModal';
import '../assets/styles/sass/components/DatePicker.scss';

const AvailabilityCalendar = (props) => {
  const [pickedDate, setPickedDate] = useState(new Date());
  const [modalOpen, setModalOpen] = useState(false);

  registerLocale('es', es);

  function handleSelect() {
    setModalOpen(true);
  }

  function handleClose() {
    setModalOpen(false);
  }

  function handleNext() {
    const selected = pickedDate;
    const year = selected.getFullYear();
    const month = selected.getMonth();
    const day = selected.getDate() + 1;
    const nextDate = new Date(year, month, day);
    props.selectedDate(nextDate);
    setPickedDate(nextDate);
  }

  function handlePrev() {
    const selected = pickedDate;
    const year = selected.getFullYear();
    const month = selected.getMonth();
    const day = selected.getDate() - 1;
    const nextDate = new Date(year, month, day);
    props.selectedDate(nextDate);
    setPickedDate(nextDate);
  }

  return (
    <div className='availability'>
      <h5 className='availability__title'>
        Disponibilidad
      </h5>
      <DatePicker
        showPopperArrow={false}
        selected={pickedDate}
        onChange={(date) => {
          props.selectedDate(date);
          setPickedDate(date);
        }}
        onSelect={handleSelect}
        locale='es'
        inline
      />
      <BookingnModal
        modalOpen={modalOpen}
        onClose={handleClose}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </div>
  );
};

const mapDispatchToProps = {
  selectedDate,
};

export default connect(null, mapDispatchToProps)(AvailabilityCalendar);
