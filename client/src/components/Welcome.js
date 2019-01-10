import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class Welcome extends Component {
    constructor(){
        super();
        this.state={
            welcome:""
        };
    }
    componentDidMount(){
        fetch("/api/welcome").then((res)=>{
            return res.text();
        }).then((welcome)=>{
            this.setState({
                welcome: welcome
            });
        });
    }
    render(){
        return(
            <div>
            <h1>Please choose your role</h1>
            <Button type="submit">
                {/* <Link to={'/studentform'}></Link> */}
                Sign up as a Student
            </Button>
            
            <Button type="submit">
                {/* <Link to={'/tutorform'}></Link> */}
                Sign up as a Tutor
            </Button>
            </div>
        )
    }
}

export default Welcome;