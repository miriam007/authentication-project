// import React, { Component } from "react";
// import { Link, Route } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import Profile from './Profile';
// import TutorProfile from './TutorProfile';
// import ChooseRole from './ChooseRole';

// class DisplayProfile extends Component {
//     constructor(){
//         super();
//         this.state={
//             userId:"",
//             studentForms:[],
//             tutorForms: [],
//             studentClick: false,
//             tutorClick: false
//         };
        
//     }
    

//     componentDidMount(){
//         fetch("/api/userId").then((res)=>{
//             return res.text();
//         }).then((userId)=>{
//             this.setState({
//                 userId: userId
//             });
//             console.log(this.state.userId)
//         });
//         fetch("/api/student").then((res)=>{
//             return res.json();
//         }).then((studentForms)=>{
//             this.setState({
//                 studentForms: studentForms
//             });
//             console.log(this.state.studentForms)
//         });
//         fetch("/api/tutor").then((res)=>{
//             return res.json();
//         }).then((tutorForms)=>{
//             this.setState({
//                 tutorForms: tutorForms
//             });
//             console.log(this.state.tutorForms)
//         });

//     render(){
//         let whatToShow='';
//         const studentForms = this.state.studentForms;
//         const tutorForms=this.state.tutorForms;
    
//         // if(this.state.studentForms === []){
//         //     whatToShow = <ChooseRole/>
//         // }
//         studentForms.map((form, index)=>{
//             if (form.userId === this.state.userId){
//                 whatToShow=<Profile/>
//             } else if (form.userId !== this.state.userId){
//                 whatToShow = <ChooseRole/>
//             }
//         })

//         tutorForms.map((form, index)=>{
//             if (form.userId === this.state.userId){
//                 whatToShow=<TutorProfile/>
//             } else if (form.userId !== this.state.userId){
//                 whatToShow = <ChooseRole/>
//             }
//         })
    
//         return(
//         <div>
//         {whatToShow}
        
//         </div>
//          )
//      }
// }
 
// export default DisplayProfile;