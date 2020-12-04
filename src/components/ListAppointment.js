import React from 'react';
import PropTypes from 'prop-types';
import Appointment from './Appointment';

const ListAppointment = ({ appointments, removeAppointment }) => {
    const msg = appointments.length === 0 ? 'No hay citas.' : 'Administra las citas aquí.';
    return (
        <div className="card mt-2 py-5">
            <div className="card-body">
                <h2 className="card-title text-center">{msg}</h2>
                <div className="appointments-list">
                    {appointments.map(appointment => (
                        <Appointment key={appointment.id} appointment={appointment} removeAppointment={removeAppointment} />
                    ))}
                </div>
            </div>
        </div>
    );
};

ListAppointment.propTypes = {
    appointments: PropTypes.array.isRequired,
    removeAppointment: PropTypes.func.isRequired
};

export default ListAppointment;