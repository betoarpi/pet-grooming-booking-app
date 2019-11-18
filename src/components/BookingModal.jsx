import React from 'react';
import Modal from './Modal';
import DayAvailability from './DayAvailability';
import BookingConfirmation from './BookingConfirmation';
import BookingSuccess from './BookingSuccess';
import '../assets/styles/sass/components/DayAvailability.scss';
import '../assets/styles/sass/components/BookingConfirmation.scss';

const BookingModal = (props) => {
  const { modalOpen, onClose, handleNext, handlePrev } = props;
  const weekDays = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miércoles',
    'Jueves',
    'Viernes',
    'Sábado',
  ];
  const months = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
  ];
  return (
    <Modal modalOpen={modalOpen} onClose={onClose}>
      <DayAvailability
        handleNext={handleNext}
        handlePrev={handlePrev}
        weekDays={weekDays}
        months={months}
      />
      <BookingConfirmation
        weekDays={weekDays}
        months={months}
      />
      <BookingSuccess
        weekDays={weekDays}
        months={months}
      />
    </Modal>
  );
};

export default BookingModal;
