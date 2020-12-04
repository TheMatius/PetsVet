import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
import PropTypes from 'prop-types';

const initialState = {
    appointment: {
        pet: '',
        owner: '',
        date: '',
        hour: '',
        description: '',
    },
    error: false,
};

class NewAppointment extends Component {
    state = { ...initialState };

    handleSubmit = evt => {
        evt.preventDefault();

        const { pet, owner, date, hour, description } = this.state.appointment;
        if (pet === '' || owner === '' || date === '' || hour === '' || description === '') {
            this.setState({ error: true });
            return;
        }
        this.props.createNewAppointment({
            ...this.state.appointment,
            id: uuid(),
        });

        this.setState({ ...initialState })
    }

    handleChange = evt =>  {
        this.setState({
            appointment: {
                ...this.state.appointment,
                [evt.target.name]: evt.target.value
            }
        });
    };

    render() {
        const { error } = this.state;

        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>

                    { error ? <div className="alert alert-danger mt-2 mb-5 text-center">
                        Todos los campos son obligatorios</div> : null }

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Mascota"
                                    name="pet"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.pet}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input 
                                    type="text"
                                    className="form-control"
                                    placeholder="Nombre Dueño"
                                    name="owner"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.owner}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="date"
                                    className="form-control"
                                    name="date"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.date}
                                />
                            </div>

                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input 
                                    type="time"
                                    className="form-control"
                                    name="hour"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.hour}
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Descripción</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea 
                                    className="form-control"
                                    placeholder="Agrege una descripción"
                                    name="description"
                                    onChange={this.handleChange}
                                    value={this.state.appointment.description}
                                ></textarea>
                            </div>
                        </div>

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita" />
                    </form>
                </div>
            </div>
        )
    }
};

NewAppointment.propTypes = {
    createNewAppointment: PropTypes.func.isRequired
}

export default NewAppointment;
