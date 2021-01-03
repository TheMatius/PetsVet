import React, { Component } from 'react'

import './App.css';
import './bootstrap.min.css';

import Header from './components/Header';
import NewAppointment from './components/NewAppointment';
import ListAppointment from './components/ListAppointment';

class App extends Component {
	state = {
        appointments : []
    }
    
    //OnLoad App
    componentDidMount() {
        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        this.setState({ appointments });
    }

    //OnUpdate App
    componentDidUpdate() {
        localStorage.setItem('appointments', JSON.stringify(this.state.appointments));
    }

    createNewAppointment = newAppointment => {
        const appointments = [...this.state.appointments, newAppointment]
        this.setState({ appointments });
    }

    removeAppointment = id => {
        console.log(id);
        let appointments = [...this.state.appointments];
        appointments = appointments.filter(appointment => appointment.id !== id);
        this.setState({ appointments });
    }

	render() {
        const { appointments } = this.state;
		return (
			<div className="container">
				<Header title="Un Titulo" />
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <NewAppointment createNewAppointment={this.createNewAppointment}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 mx-auto">
                        <ListAppointment appointments={appointments} removeAppointment={this.removeAppointment}/>
                    </div>
                </div>
			</div>
		)
	}
};

export default App;