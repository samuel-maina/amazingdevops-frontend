import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer'
import ContactUs from './Contact_us';
import axios from 'axios';

class Course extends React.Component {
    constructor(props) {
        super(props);
        this.state = {sessions: [],course:{}};
    }
    async componentDidMount() {
        await axios.get("courses/" + this.props.match.params.id)
                .then((response) => {
                    this.setState({course: response.data});
             
                }).catch((err) => {
 
        });
                await axios.get("sessions/course/" + this.props.match.params.id)
                .then((response) => {
                    this.setState({sessions: response.data});
             
                }).catch((err) => {
 
        });

    }
    render() {
        return(<div class="content-body">
            <Nav/>
        
            <div class="margin-top-md ">
        
                <div class="program-header font-300"><div class="font-xl  margin-top-md Robosto text-bold session text-gray">COURSES</div></div>
                <div class="session">
                     <div class="Roboto font-xl">{this.state.course.name} </div>
                    <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div>
        
                    <div class="margin-top-xsm font-sm">{this.state.course.description}</div>
        
                    
                    {this.state.sessions.length === 0 ? <div class="Roboto">No calendar</div> :
                            <div>
                    <div className='nav-item btn-variant-3 ' >
                        Calendar
                    </div>
                                <div class="font-lg  Roboto sessions margin-sm">{this.state.course.name}</div>
                                <table class=" ubuntu sessions  " id="sessions">
                
                                    <tr class="text-white ">
                                        <th>Sessions</th>
                
                                        <th>Session Dates</th>
                                        <th>Cost</th>
                                    </tr>
                
                
                
                                    {this.state.sessions.map((session,index) =>
                                                        <tr class="font-md Roboto">
                                                            <td class="text-bold">Session {index+1}</td>
                                    
                                                            <td>{new Date(session.sessionStart).toLocaleDateString('en-us', {month: "long", day: "numeric"})} ~ {new Date(session.sessionEnd).toLocaleDateString('en-us', {month: "long", day: "numeric"})}</td>
                                                            <td> $ {this.state.course.cost}</td>
                                                        </tr>
                                                            )}
                
                
                                </table></div>}
        
                </div>
        
            </div>
        
            <ContactUs/>
            <Footer/>
        </div>)
    }
}
export default Course;




