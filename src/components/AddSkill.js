import React, { Component } from 'react'

class AddSkill extends Component {
    
    
    inputRef = React.createRef()

    // remove skill
    removeSkill = i => {
        const { skills } = this.props.values;
        skills.splice(i, 1)
        this.setState({
            skills: skills
        })
    }

    // add skill
    addSkill = e => {
        const { skills } = this.props.values;
        const value = e.target.value
        if(e.key === "Enter" && value){
            // check if duplicate skill
            if(skills.find(skill => skill.toLowerCase() === value.toLowerCase())){
                return alert("No duplicate value allowed")
            }
            // else add skill to skills array
            skills.push(value)
            // set new state
            this.setState({
                skills
            })
            // when submit skill, set current input filed null
            this.inputRef.current.value = null
        } else if(e.key === "Backspace" && !value){
            // if no value and hit backspace we will remove previous skill
            this.removeSkill(skills.length - 1)
        }
    }
    

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
   

    render() {
        const { values, handleChange} = this.props;
        return (
            <div>
            <nav className="navbar navbar-dark bg-primary">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <span className="navbar-brand mb-0 h1">Skill Details</span>
            </nav>
            <div className="d-grid p-2 m-1 justify-content-center" >
                <div className="bg-light"  style={style.center}>
                    <h2> Add Your Skill </h2>
                    <div className="skill">
                        <ul>
                            <li className=" form-control">
                                <input onKeyDown={this.addSkill} type="text" size="4"  ref={this.inputRef}/>
                            </li>
                            
                            { values.skills.map((skill, i) => {
                                return (
                                    <li key={i}> {skill} <button  onChange={handleChange('skills')} 
                                     onClick={() => this.removeSkill(i)}>+</button> </li>
                                )
                            }) }
                            
                        </ul>
                        
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
            </div>
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

export default AddSkill