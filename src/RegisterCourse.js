


import {render} from "react-dom";
import React from "react";
import {Redirect} from 'react-router-dom'
import StudentNav from './StudentNav';
import axios from 'axios';

class RegisterCourse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {programs: [], program: '', sessions: []};
        this.handleProgramChange = this.handleProgramChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.registerCourse = this.registerCourse.bind(this);
        this.reload = this.reload.bind(this);
        this.dropCourse = this.dropCourse.bind(this);
    }
    async componentDidMount() {
        await axios.get("http://161.35.222.102:8080/api/v1/programs/registered")
                .then((response) => {
                    this.setState({programs: response.data});
                }).catch((err) => {

        });
    }
    async handleProgramChange(event) {
        await this.setState({program: event.target.value});
        console.log(this.state.program);
    }
    handleSubmit(event) {
        this.reload();
        event.preventDefault();
    }
    reload() {
        axios.get("http://161.35.222.102:8080/api/v1/sessions/program/" + this.state.program)
                .then((response) => {
                    this.setState({sessions: response.data});
                    if (!Object.keys(response.data).length) {

                    }
                }).catch((err) => {

        });
    }
    registerCourse(sessionId) {
        axios.post("http://161.35.222.102:8080/api/v1/sessions/" + sessionId)
                .then((response) => {

                    this.reload();
                }).catch((err) => {

        });
    }

    dropCourse(session) {
        axios.delete("http://mizani-hub:8080/api/v1/sessions/student/registered/" + session)
                .then((response) => {

                    this.reload();
                }).catch((err) => {

        });
    }

    render() {
        const isLoggedIn = false;
        return(
                <div> 
                    <StudentNav/>
                    <div class="content">
                        <div class="pages-header padding-sm  w-100 text-gray font-lg margin-sm"><b>Welcome to the course registration</b></div>
                        <div class="program-header">                
                            <div class="balance center float-left margin-sm">
                                <div class="text-gray">
                                    <div class="w-100 float-left center">
                                        <b class="font-vl">5000</b>
                                    </div>
                                    <div class="font-xsm w-100 float-left center"><p>BALANCE</p></div>
                                </div>
                            </div>
                
                            <form class="w-75 float-right" onSubmit={this.handleSubmit}>
                
                                <select class="w-75 input-variant-b" value={this.state.program} onChange={this.handleProgramChange}>
                                    <option >Please select a program below</option>   
                                    {this.state.programs.map(program =>
                                        <option value={program.id} default>{program.name}</option>

                                                )}
                                </select>
                                <div class='float-right'><button class="btn-variant-3 pointer margin-sm" value="submit" >View courses</button></div>
                            </form>
                        </div>
                        <div class="session">
                            {this.state.sessions.map(session =>
                                <div class="course float-rightd margin-sm  wd-80">
                    
                    <div class=" font-lg text-bold cost-bar">
                                        
                                        $ {session.cost}
                                        </div>
                                    <div class="text-gray font-lg text-bold">Session {session.sessionId}</div>
                    
                                    <div class="padding-sm-fixed">
                                        <div class="font-sm text-bold">{session.name}</div>
                                        
                                        <div class="font-xsm">{session.courses.map(course=><span class="margin-xsm ">{course.name}, </span>)}</div>
                                        {session.registered ? <span class="font-sm w-50 margin-sm registration-status ">Registered</span> : <span class="font-sm w-50 margin-sm registration-status ">Not Registered</span>}
                                        {session.registered ?
                                                            <div class='float-right'><button class="btn-variant-4  text-white pointer" onClick={() => this.dropCourse(session.sessionId)}>Drop course</button></div>
                                                                :
                                                            <div class='float-right'><button class="btn-variant-3  pointer" onClick={() => this.registerCourse(session.sessionId)}>Apply now</button></div>
                                                    
        }      
                                    </div>  
                                            
                                </div>
                                )}
                        </div>
                    </div>
                </div>
                );
    }
}
;

export default RegisterCourse;
