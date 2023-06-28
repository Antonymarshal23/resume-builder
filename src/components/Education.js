import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>

export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        // process the form to the backend which means to the backend framework 
        // like flask or django.. all about api
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    another = e => {
        e.preventDefault();
    }

    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark bg-primary">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <span className="navbar-brand mb-0 h1">Education Details</span>
                </nav>
                <div className="d-grid p-2 m-1 justify-content-center" >
                    <div className="bg-light"  style={style.center}>
                        <h3>Educations</h3>
                        <br/>
                        <form> 
                            <div className="form-group col-md-5">
                                <input onChange={handleChange('institute')} defaultValue={values.institute} type="text" class="form-control" placeholder="Institute"></input>
                            </div>
                            <br/>
                            <div className="form-group col-md-5">
                                <input onChange={handleChange('degree')} defaultValue={values.degree} type="text" class="form-control" placeholder="Degree"></input>
                            </div>
                            <br/> 
                            <div className="form-group col-md-5">
                                <input onChange={handleChange('designation')} defaultValue={values.designation} type="text" class="form-control" placeholder="Designation"></input>
                            </div>
                            <br/>
                            <div className="form-group col-md-2">
                                <input onChange={handleChange('year')} defaultValue={values.year} type="text" class="form-control" placeholder="Year"></input>
                            </div>
                        </form>
                        <button 
                        label="Add"
                        className="btn btn-success m-1" 
                        type="submit"
                        onClick={this.another}>
                        Add
                        </button>
                        <br/>
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

export default FormPersonalDetails
