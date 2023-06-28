// its going to be parent component 
import React, { Component } from "react";

import FormUserDetails from './FormUserDetails';
import Education from "./Education";
import AddSkill from "./AddSkill";
import Confirm from "./Confirm";
import Success from "./Success";

export class UserForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            step: 1,
            firstName: "",
            lastName: "",
            email: "",
            address: "",
            phone: "",
            institute: "",
            degree: "",
            designation: "",
            year: "",
            skills: []
        }
        this.inputRef = React.createRef()
    }
    

    


    // preceed to next step
    nextStep = () => {
        const { step }  = this.state;
        this.setState({
            step: step + 1
        });
    }

    // preceed to prev step
    prevStep = () => {
        const { step }  = this.state;
        this.setState({
            step: step - 1
        });
    }

    //  handle field state 
    handleChange = input => e => {
        // get the input ans set it to whatever the value 
        this.setState({ [input]: e.target.value });
    };

    render() {
        // first we need to destructure the data 
        // pull the step out of the state 
        const { step } = this.state;    
        const {firstName, lastName, email, address, phone, institute, degree, designation, year, skills} = this.state;
        // get the value as well 
        const values = {firstName, lastName, email, address, phone, institute, degree, designation, year, skills};
        
        switch(step) {
            case 1:
                return (
                    <FormUserDetails 
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 2:
                return (
                    <Education 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 3:
                return (
                    <AddSkill 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                )
            case 4:
                return (
                    <Confirm 
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                )
            case 5:
                return <Success />
        }
    }
}

export default UserForm