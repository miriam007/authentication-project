// import React, { Component } from "react";
// import { Link, Route } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import Profile from './Profile';
// import TutorProfile from './TutorProfile';

// class DisplayProfile extends Component {
//     render(){
//         let whatToShow='';
//         const profile = this.state.profile;
//         const tutorProfile=this.state.tutorProfile;
//         console.log(studentForms)
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
//         return(
//         <div>
//         <h1>Please choose your role. Sign up as a student or tutor.</h1>
        
//             <Link to={'/StudentForm'}>
//                 <Button type="submit">
//                     Student
//                 </Button> 
//             </Link>
//             <Route path="/studentform" component={StudentForm}/>
//              {' '}
//             <Link to={'/TutorForm'}>
//                 <Button type="submit">
//                 Tutor
//                 </Button>
//             </Link>
//             <Route path="/tutorform" component={TutorForm}/>
        
//         </div>
//          )
//     }
// };
 
// export default DisplayProfile;