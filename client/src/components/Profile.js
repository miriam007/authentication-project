import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import StudentForm from './StudentForm';
import TutorForm from './TutorForm';

class Profile extends Component {
    render() {
        let props=this.props;
        return (
            <div>
                Profile
            </div>
        )
    }
}

export default Profile;