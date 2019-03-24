import React, { Component } from "react";
import { Link, Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import StudentForm from './StudentForm';
import TutorForm from './TutorForm';

class ChooseRole extends Component {
    render(){

        return(
        <div>
        <h1>Please choose your role. Sign up as a student or tutor.</h1>
        
            <Link to={'/StudentForm'}>
                <Button type="submit">
                    Student
                </Button> 
            </Link>
            <Route path="/studentform" component={StudentForm}/>
             {' '}
            <Link to={'/TutorForm'}>
                <Button type="submit">
                Tutor
                </Button>
            </Link>
            <Route path="/tutorform" component={TutorForm}/>
        
        </div>
         )
    }
};
 
export default ChooseRole;