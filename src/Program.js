import React from "react";
import { Link, NavLink } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer'
import ContactUs from './Contact_us';
import axios from 'axios';

class Program extends React.Component {
    constructor(props) {
        super(props);
        this.state = {program: [], courses: [], sessions: [], header: ""};
    }
    async componentDidMount() {
        const response = await axios.get("programs/" + this.props.match.params.id)
                .then((response) => {
                    this.setState({program: response.data});
                    this.setState({header:response.data.image.bigImage});
                    this.setState({sessions: response.data.sessions});
                }).catch((err) => {


        });
        axios.get("sessions/" + this.props.match.params.id)
                .then((response) => {
                    this.setState({courses: response.data});
                    if (!Object.keys(response.data).length) {

                    }
                }).catch((err) => {

        });

    }
    render() {
        return(<div class="content-body">
            <Nav/>
        
            <div class="margin-top-md ">
        
                <div class="program-header font-300" style={{backgroundImage: `url(${'http://104.248.113.144:3030/' + this.state.header})`}}><div class="font-xl  margin-top-md Robosto text-bold session text-gray">PROGRAMS</div></div>
                <div class="session">
                    <div class="Roboto font-xl">{this.state.program.name} </div>
                    <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div>
        
                    <div class="margin-top-xsm font-sm">{this.state.program.description}</div>
        
                    <div className='nav-item margin-top-xsm btn-variant-1 flex-horizontal font-md text-bold text-gray' >
                        COURSES<span class="font-bold   crimson-text">    </span>
                    </div>
                    <div class="three-per-row">
                        {this.state.sessions.map(session =>
                        <Link to={this.props.match.params.id + '/session/' + session.sessionId} class="search">
                        <h3 class="Roboto">What you are going to learn   </h3>             
                        <div class="  margin-sm ">
        
        
        
        
                            <div class="paddidng-sm-fixed">
                                <p class="font-md text-bold text-gray Roboto">{session.name}</p>
                                <div class="clusters">
                                    {session.courses.map(c => <li class="font-xsm w-100">{c.name}</li>)}
        
                                </div>
                                <p class="font-xsm ">{session.duration}</p>
                            </div>  
        
                        </div>
        
                        </Link>)}
                    </div>
        
                </div>
        
            </div>
        
            <ContactUs/>
            <Footer/>
        </div>)
    }
}
export default Program;


