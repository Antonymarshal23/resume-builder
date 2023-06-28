import React, { Component } from 'react';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                <div className='form-group'>
                    <nav className="navbar navbar-dark bg-primary">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <span class="navbar-brand mb-0 h1r">Personal details</span>
                    </nav>
                    <div className="d-grid p-2 justify-content-center" >
                        <div className="bg-light "  style={style.center}>
                        <form >
                            <div className="form-group col-md-4">
                                <input className="form-control"
                                type="text"
                                placeholder="First Name"
                                onChange={handleChange('firstName')}
                                defaultValue={values.firstName}
                                >
                                </input>
                            </div>
                            <br/>
                            <div className="form-group col-md-4">
                                <input className="form-control" 
                                type="text"
                                placeholder="Last Name"
                                onChange={handleChange('lastName')}
                                defaultValue={values.lastName}
                                >
                                </input>
                                <br/>
                            </div>
                            <div className="form-group col-md-5">
                                <input className="form-control"
                                type="email"    
                                placeholder="email"
                                onChange={handleChange('email')}
                                defaultValue={values.email}
                                >
                                </input>
                            </div>
                            <br/>
                            <div className="form-group col-md-7">
                                <input className="form-control"
                                type="text"    
                                placeholder="Address"
                                onChange={handleChange('address')}
                                defaultValue={values.address}
                                >
                                </input>
                            </div>
                            <br/>
                            <div className="form-group col-md-4">
                                <input className="form-control "    
                                placeholder="Phone"
                                onChange={handleChange('phone')}
                                defaultValue={values.phone}
                                >
                                </input>
                            </div>
                            <br/>
                            <div className='text-center' >
                            <button 
                                label="Continue"    
                                className="btn btn-primary" 
                                type="submit"
                                onClick={this.continue}>
                                Continue
                            </button>
                            </div>
                            </form>
                        </div>
                    </div>
                    
                </div>
            </React.Fragment>
        )
    }
}

const style = {
    center: {
        width:610,
		margin: 20,
		padding:20,
		border: 3
    }
}

export default FormUserDetails
