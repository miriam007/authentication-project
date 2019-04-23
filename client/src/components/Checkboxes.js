import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button, Checkbox } from 'react-bootstrap';


class Checkboxes extends Component {
    constructor(){
        super();

        this.state= {
            intro: false,
            jsInt: false,
            jsAdv: false,
            netInt: false,
            netAdv: false
        }
    }
    toggleChangeIntro = () => {
        this.setState(prevState => ({
          intro: !prevState.intro,
        }));
    }
    toggleChangeJsInt = () => {
        this.setState(prevState => ({
          jsInt: !prevState.jsInt,
        }));
    }
    toggleChangeJsAdv = () => {
        this.setState(prevState => ({
          jsAdv: !prevState.jsAdv,
        }));
    }
    toggleChangeNetInt = () => {
        this.setState(prevState => ({
          netInt: !prevState.netInt,
        }));
    }
    toggleChangeNetAdv = () => {
        this.setState(prevState => ({
          netAdv: !prevState.netAdv,
        }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        let arr = [];
        for (var key in this.state) {
          if(this.state[key] === true) {
            arr.push(key);
          }
        }
        let data = {
          check: arr.toString() 
        };
    }
render() {
    return(
<FormGroup controlId="formHorizontal" onSubmit={this.onSubmit}>
                {/* <col smOffset={2} sm={10}> */}
                    <ControlLabel>What class or classes can you help with? <br></br>Select all that apply.</ControlLabel>
                        <Checkbox 
                        type="checkbox"
                        value="Intro to Web" 
                        checked={this.state.intro}
                        onChange={this.toggleChangeIntro}>Intro to Web</Checkbox>
                        
                        <Checkbox 
                        type="checkbox"
                        value="JavaScript Intermediate"
                        checked={this.state.jsInt}
                        onChange={this.toggleChangeJsInt}>JavaScript Intermediate</Checkbox>
                        
                        <Checkbox 
                        type="checkbox"
                        value="JavaScript Advanced"
                        checked={this.state.jsAdv}
                        onChange={this.toggleChangeJsAdv}>JavaScript Advanced</Checkbox>
                        
                        <Checkbox 
                        type="checkbox"
                        value="C# .NET Intermediate"
                        checked={this.state.netInt}
                        onChange={this.toggleChangeNetInt}>C# .NET Intermediate</Checkbox>
                        
                        <Checkbox 
                        type="checkbox"
                        value="C# .NET Advanced"
                        checked={this.state.netAdv}
                        onChange={this.toggleChangeNetAdv}>C# .NET Advanced</Checkbox>
                    {/* </col> */}
                    {/* </FormControl> */}
                </FormGroup>
        );
    }

}

export default Checkboxes;