import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>

export class Success extends Component {

    render() {
        
        return (
            <React.Fragment>
            <div className='form-group'>
                <nav className="navbar navbar-dark bg-primary">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <span className="navbar-brand mb-0 h1 justify-content-center">Success Page</span>
                    
                </nav>
                <div className='text-center m-1'>
                    <h1>Thank For Your Submission</h1>
                    <p>you will receive an email shortly with further instructions</p>
                </div>
                
            </div>
            </React.Fragment>
        )
    }
}


export default Success
