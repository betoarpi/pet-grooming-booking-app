import React from 'react';
import Modal from './Modal';
import DayAvailability from './DayAvailability';
import BookingConfirmation from './BookingConfirmation';
import BookingSuccess from './BookingSuccess';
import '../assets/styles/sass/components/DayAvailability.scss';
import '../assets/styles/sass/components/BookingConfirmation.scss';

const BookingModal = (props) => {
  const { modalOpen, onClose } = props;
  return (
    <Modal modalOpen={modalOpen} onClose={onClose}>
      <DayAvailability />
      <BookingConfirmation />
      <BookingSuccess />
    </Modal>
  );
};

export default BookingModal;
