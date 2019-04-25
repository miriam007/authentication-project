import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Button, Checkbox } from 'react-bootstrap';


class Checkboxes extends Component {
    constructor(){
        super();
    }
    
render() {
  return(
    <FormGroup controlId="formHorizontal" onSubmit={this.onSubmit}>
                {/* <col smOffset={2} sm={10}> */}
                    <ControlLabel>What class or classes can you help with? <br />Select all that apply.</ControlLabel>
                      {this.props.classCatalog.map((c)=>(
                        <Checkbox
                          type="checkbox"
                          value={c.code}
                          checked={this.props.isClassSelected(c.code)}
                          onChange={()=> {
                            this.props.onClassSelected(c.code);
                          }}
                          >
                          {c.name}
                        </Checkbox>
                      ))}
                    {/* </col> */}
                    {/* </FormControl> */}
                    {/* <button onClick={this.onSubmit}/> */}
                </FormGroup>
        );
    }
}

export default Checkboxes;