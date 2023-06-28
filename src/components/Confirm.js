import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values:  {firstName, lastName, email, address, phone, institute , degree, designation, year, skills} } = this.props;

        return (
            <React.Fragment>
            
                <nav className="navbar navbar-dark bg-primary">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <span class="navbar-brand mb-0 h1 justify-content-center">Confirm Page</span>
                    
                </nav>
                
                <div className="d-grid  justify-content-center">
                <div className="shadow-none p-3 mb-5 bg-light rounded"  style={style.center}>
                    <div className="list-group  text-center ">
                        <li className="list-group" ><h5>First Name</h5>{firstName}</li>
                        <li className="list-group"><h5>Last Name</h5>{lastName}</li> 
                        <li className="list-group" ><h5>Email</h5>{email}</li> 
                        <li className="list-group" ><h5>Address</h5>{address}</li> 
                        <li className="list-group" ><h5>Phone</h5>{phone}</li> 
                        <li className="list-group" ><h5>Institute</h5>{institute}</li> 
                        <li className="list-group" ><h5>Degree</h5>{degree}</li> 
                        <li className="list-group" ><h5>Designation</h5>{designation}</li> 
                        <li className="list-group" ><h5>Skills</h5>{skills}</li> 
                    </div>
                    <div className='text-center' >
                        <button 
                            label="continue"
                            className="btn btn-primary space" 
                            type="submit"
                            onClick={this.continue}>
                            Continue
                        </button>
                        <button 
                            style={style.space}
                            label="back"
                            className="btn btn-secondary  active" 
                            type="submit"
                            onClick={this.back}>
                            Back
                        </button>
                    </div>
                </div>
                </div>
            </React.Fragment>
        )
    }
}

const style = {
    space: {
		margin: 5
    },
    center: {
        width:610,
		margin: 20,
		padding:20,
		border: 3
    
    }
}

export default Confirm
