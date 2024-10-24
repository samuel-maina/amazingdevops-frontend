import { Link, NavLink } from 'react-router-dom';
import React from "react";
import axios from 'axios';

class Sessions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courses: [], programs: [], program: ''};
        this.handleProgramChange = this.handleProgramChange.bind(this);
        this.allCourses = this.allCourses.bind(this);
        this.programs = this.programs.bind(this);
        this.sessionsByProgram = this.sessionsByProgram.bind(this);
    }
    async componentDidMount() {
        await this.allCourses();
        await this.programs();

    }
    async handleProgramChange(event) {
        await this.setState({program: event.target.value});
        if (this.state.program === "all") {
            await this.allCourses();
        } else {
            await this.sessionsByProgram();
        }

    }
    allCourses() {
        const response = axios.get("sessions/")
                .then((response) => {
                    this.setState({courses: response.data});
                }).catch((err) => {
            console.log(err.response.data);

        });
    }

    programs() {
        axios.get("programs/")
                .then((response) => {
                    this.setState({programs: response.data});
                }).catch((err) => {

        });
    }
    sessionsByProgram() {
        axios.get("sessions/program/" + this.state.program)
                .then((response) => {
                    this.setState({courses: response.data});
                }).catch((err) => {

        });
    }

    render() {

        return (<div class="w-100" id="">
    <div class="program-header font-300"><div class="font-xl  margin-top-md Robosto text-bold session text-gray">AMAZINGDEVOPS CALENDAR</div></div>
    <div class="  font-100  session">
        <div class="Roboto font-xl">
            Our simplified learning scheduled that is online based provides you the flexibility to learn exciting courses.
        </div>
        <div class="flex-vertical bg-gray padding-lg">
            <div class="font-lg  text-white Ubuntu padding-bm-sm">Select course to view full calendar.</div>
            <select class="w-7s5 input-variant-b" value={this.state.program} onChange={this.handleProgramChange}>
                <option value="all">All course sessions</option>   
                {this.state.programs.map(program =>
                        <option value={program.id} default>{program.name}</option>

                    )}
            </select>
        </div>
        <span class="font-md Roboto margin-top-xsm">{this.state.courses.length} Results Found</span>
        <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div>
    </div>

    {this.state.programs.map((course,index) =>
                        <div class="session">
                    
                            {course.sessions.length === 0 ? <div></div> :
                                                    <div>
                                                        <div class="font-lg  Roboto sessions margin-sm">{course.name}</div>
                                                        <table class=" ubuntu sessions  " id="sessions">
                                            
                                                            <tr class="text-white ">
                                                                <th>Sessions</th>
                                            
                                                                <th>Session Dates</th>
                                                                <th>Cost</th>
                                                            </tr>
                                            
                                            
                                            
                                                            {course.sessions.map((session,index) =>
                                                                                        <tr class="font-md Roboto">
                                                                                            <td class="text-bold">Session {index+1}</td>
                                                                        
                                                                                            <td>{new Date(session.sessionStart).toLocaleDateString('en-us', {month: "long", day: "numeric"})} ~ {new Date(session.sessionEnd).toLocaleDateString('en-us', {month: "long", day: "numeric"})}</td>
                                                                                            <td> $ {course.cost}</td>
                                                                                        </tr>
                                                                )}
                                            
                                            
                                                        </table></div>}</div>)}
</div>);
    }
}
export default Sessions;


