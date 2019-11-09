import React from 'react';
import Modal from './Modal';
import '../assets/styles/sass/components/ReservationModal.scss';

const DayAvailability = (props) => {
    const {modalOpen, onClose} = props;
    return (
        <Modal modalOpen={modalOpen} onClose={onClose}>
            <div className='day-availability'>
                <h2><i className='far fa-calendar-alt'></i> Disponibilidad</h2>

                <div className='day-availability__calendar'>
                    <header>
                        <h4 className='day-availability__date'>Jueves 31 de Octubre del 2019</h4>
                        <div className='prev'><i className='fas fa-chevron-left'></i></div>
                        <div className='next'><i className='fas fa-chevron-right'></i></div>
                    </header>

                    <div className='day-availability__hour'>
                        <div className='day-availability__time'>
                            <time datetime='9:00'>9:00</time> A.M.
                        </div>
                        <div className='day-availability__reservation'>
                            something
                        </div>
                    </div>
                    <div className='day-availability__hour'>
                        <div className='day-availability__time'>
                            <time datetime='10:00'>10:00</time> A.M.
                        </div>
                        <div className='day-availability__reservation'>
                            something
                        </div>
                    </div>
                    <div className='day-availability__hour'>
                        <div className='day-availability__time'>
                            <time datetime='11:00'>11:00</time> A.M.
                        </div>
                        <div className='day-availability__reservation'>
                            something
                        </div>
                    </div>
                    <div className='day-availability__hour'>
                        <div className='day-availability__time'>
                            <time datetime='12:00'>12:00</time> P.M.
                        </div>
                        <div className='day-availability__reservation'>
                            something
                        </div>
                    </div>
                    <div className='day-availability__hour'>
                        <div className='day-availability__time'>
                            <time datetime='13:00'>13:00</time> P.M.
                        </div>
                        <div className='day-availability__reservation'>
                            something
                        </div>
                    </div>
                    <div className='day-availability__hour'>
                        <div className='day-availability__time'>
                            <time datetime='14:00'>14:00</time> P.M.
                        </div>
                        <div className='day-availability__reservation'>
                            something
                        </div>
                    </div>
                    <div className='day-availability__hour'>
                        <div className='day-availability__time'>
                            <time datetime='15:00'>15:00</time> P.M.
                        </div>
                        <div className='day-availability__reservation'>
                            something
                        </div>
                    </div>
                    <div className='day-availability__hour'>
                        <div className='day-availability__time'>
                            <time datetime='16:00'>16:00</time> P.M.
                        </div>
                        <div className='day-availability__reservation'>
                            something
                        </div>
                    </div>
                    <div className='day-availability__hour'>
                        <div className='day-availability__time'>
                            <time datetime='17:00'>17:00</time> P.M.
                        </div>
                        <div className='day-availability__reservation'>
                            something
                        </div>
                    </div>
                    <div className='day-availability__hour'>
                        <div className='day-availability__time'>
                            <time datetime='18:00'>18:00</time> P.M.
                        </div>
                        <div className='day-availability__reservation'>
                            something
                        </div>
                    </div>
                    <div className='day-availability__hour'>
                        <div className='day-availability__time'>
                            <time datetime='19:00'>19:00</time> P.M.
                        </div>
                        <div className='day-availability__reservation'>
                            something
                        </div>
                    </div>
                    <div className='day-availability__hour'>
                        <div className='day-availability__time'>
                            <time datetime='20:00'>20:00</time> P.M.
                        </div>
                        <div className='day-availability__reservation'>
                            something
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default DayAvailability;
