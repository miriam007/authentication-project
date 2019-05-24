import React, { Component } from 'react';

class Search extends Component{
    constructor(){
        super();
        this.state={
            userId: '',
            name: '',
            level: ''
        }
    };
    
    componentDidMount(){
        fetch('./api/currentTutor')
        .then((res)=> res.json())
        .then((data)=> {
            this.setState(data)
        })
    }

    render(){
        return(
            <div>
                <h1>Tutors</h1>
                <div>{this.state.name}</div>
                <div>Levels: {this.state.level}</div>
            </div>
        )
    }
};

export default Search;