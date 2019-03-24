// import React, { Component } from 'react';
// import { FormGroup, FormControl, ControlLabel, Button, Checkbox } from 'react-bootstrap';
// import PropTypes from 'prop-types';

// class TutorForm extends Component {
//     constructor(){
//         super();
        
//         this.state = {
//             userId: '',
//             tutorForms: [],
//             level: '',
//             name: '',
//             aboutMe: '',
//             teachingStyle: '',
//             strengths: '',
//             contactMe: ''
//         }
//         this.handleLevelChange=this.handleLevelChange.bind(this);
//     };

//     componentDidMount(){
//         fetch("/api/userId").then((res)=>{
//             return res.text();
//         }).then((userId)=>{
//             this.setState({
//                 userId: userId
//             });
//             console.log(this.state.userId)
//         });
//         fetch("/api/tutor").then((res)=>{
//             return res.json();
//         }).then((tutorForms)=>{
//             this.setState({
//                 tutorForms: tutorForms
//             });
//             console.log(this.state.tutorForms)
//         });
//     }
//     // handleSubmit(event){
//     //     event.preventDefault();
//     //     const level = this.state.level;
//     //     const name = this.state.name;
//     //     const aboutMe = this.state.aboutMe;
//     //     const learningStyle = this.state.learningStyle;
//     //     const strengths = this.state.strengths;
//     //     const weaknesses = this.state.weaknesses;
//     //     let options = {
//     //         method: "POST",
//     //         headers: {"Content-Type": "application/json"},
//     //         body: JSON.stringify({ level, name, aboutMe, learningStyle, strengths, weaknesses })
//     //     }
//     //     fetch("/api/student", options).then((res)=>{
//     //         return res.json()
//     //     }).then((res)=>{
//     //         console.log(res)
//     //     }).catch((err)=>{
//     //         console.log(err)
//     //     })
//     // }
//     handleSubmit(event){
//         event.preventDefault();
//             userId= this.state.userId;
//             level= this.state.level;
//             name= this.state.name;
//             aboutMe= this.state.aboutMe;
//             teachingStyle= this.state.teachingStyle;
//             strengths= this.state.strengths;
//             contactMe= this.state.contactMe;
//             let options = {
//                 method: "POST",
//                 headers: {"Content-Type": "application/json"},
//                 body: JSON.stringify({ userId, level, name, aboutMe, teachingStyle, strengths, contactMe })
//             }
//             fetch("/api/tutor", options).then((res)=>{
//                 return res.json()
//             }).then((res)=>{
//                 console.log(res)
//             }).catch((err)=>{
//                 console.log(err)
//             })
//     }
    
//     handleLevelChange(e){
//         this.setState({level:e.target.value})
//     }
//     render(){
//         return(
//             <form onSubmit={this.handleSubmit.bind(this)}>

//                 <FormGroup controlId="formHorizontal">
//                 {/* <col smOffset={2} sm={10}> */}
//                     <ControlLabel>What class or classes can you help with? <br></br>Select all that apply.</ControlLabel>
//                     {/* <FormControl onChange={this.handleLevelChange} componentClass="select" placeholder="Choose your class"> */}
                    
//                         <Checkbox value="intro">Intro to Web</Checkbox>
//                         <Checkbox value="js2">JavaScript Intermediate</Checkbox>
//                         <Checkbox value="js3">JavaScript Advanced</Checkbox>
//                         <Checkbox value="net2">C# .NET Intermediate</Checkbox>
//                         <Checkbox value="net3">C# .NET Advanced</Checkbox>
//                         <Checkbox value="ux2">UX/UI Intermediate</Checkbox>
//                         <Checkbox value="ux3">UX/UI Advanced</Checkbox>
//                     {/* </col> */}
//                     {/* </FormControl> */}
//                 </FormGroup>
//      {/* this form group might need to be at the top or deleted */}
//                 <FormGroup className="form">

//                 <FormGroup controlId="formControlsTextarea">
//                     <ControlLabel>Name</ControlLabel>
//                         <FormControl 
//                             componentClass="textarea" 
//                             placeholder="name" 
//                             type="text"
//                             name="name"
//                             onChange={e=>
//                                 {this.setState({[e.target.name]: e.target.value})}
//                             }
//                             value={this.state.name}
//                         />
//                 </FormGroup>

//                     <FormGroup controlId="formControlsTextarea">
//                         <ControlLabel>About Me</ControlLabel>
//                         <FormControl 
//                             componentClass="textarea" 
//                             placeholder="Tell us about yourself." 
//                             type="text"
//                             name="aboutMe"
//                             onChange={e=>
//                                 {this.setState({[e.target.name]: e.target.value})}
//                             }
//                             value={this.state.aboutMe}
//                         />
//                     </FormGroup>
                    
//                     <FormGroup controlId="formControlsTextarea">
//                         <ControlLabel>Teaching Style</ControlLabel>
//                         <FormControl 
//                             componentClass="textarea" 
//                             placeholder="What ways have you found it helpful to teach?" 
//                             type="text"
//                             name="teachingStyle"
//                             onChange={e=>
//                                 {this.setState({[e.target.name]: e.target.value})}
//                             }
//                             value={this.state.teachingStyle}
//                         />
//                     </FormGroup>
                    
//                     <FormGroup controlId="formControlsTextarea">
//                         <ControlLabel>Strengths</ControlLabel>
//                         <FormControl 
//                             componentClass="textarea" 
//                             placeholder="What areas do you excel in?" 
//                             type="text"
//                             name="strengths"
//                             onChange={e=>
//                                 {this.setState({[e.target.name]: e.target.value})}
//                             }
//                             value={this.state.strengths}
//                         />
//                     </FormGroup>
                    
//                     <FormGroup controlId="formControlsTextarea">
//                         <ControlLabel>Contact Me</ControlLabel>
//                         <FormControl 
//                             componentClass="textarea" 
//                             placeholder="How would you like students to communicate with you?" 
//                             type="text"
//                             name="contactMe"
//                             onChange={e=>
//                                 {this.setState({[e.target.name]: e.target.value})}
//                             }
//                             value={this.state.contactMe}
//                         />
//                     </FormGroup>
                    
//                     <Button type="submit" className="submitFormButton" onClick={this.handleSubmit}>Save</Button>
//             </FormGroup>
//             </form>
//         )
//     }

// }

// TutorForm.propTypes={
//     onFormSubmit: PropTypes.func.isRequired
// };

// export default TutorForm;