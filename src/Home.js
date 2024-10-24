import {render} from "react-dom";
import React, {useState} from "react";
import {Link} from 'react-router-dom';
import Nav from './Nav';
import axios from 'axios';
import Contact_us from './Contact_us';
import Popular_Courses from './Popular_Courses';
import Footer from './Footer';
import Testimonial from './Testimonial';
import ResNav from './ResNav';
import Articles from './Articles';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {programs: []};
    }
    async componentDidMount() {
        const response = await axios.get("programs/")
                .then((response) => {
                    this.setState({programs: response.data});
                }).catch((err) => {
            

        });
    }

    render() {

        return(
                <div id="" class="content-body ">
                    <ResNav/>
                    <Nav/>
                    <div id="chatBar"><div class="btn-variant-3 pointer w-100 center font-sm Ubuntu text-bold text-wheat">Chat with us today <span class="material-symbols-sharp">
                                                                                    perm_phone_msg
                                                                                    </span></div></div>
                    <div class="margin-top-mds ">
                        <div class="home flex-horizontal" >   
                
                
                
                
                            <div class="word-box  text-white  fontsm flex-horizontal">
                                <div class="flex-vertical w-50">
                                    <p class="">“Any roles involved in a project that do not directly contribute toward the goal of putting valuable software in the hands of users as quickly as possible should be carefully considered.” <b class="float-right">-Stein Inge Morisbak</b></p>
                                    <div class="float-left flex-horizontal">
                
                                        <p class="text-white text-bold">10+ COURSES AND PROGRAMS IN DEVOPS AND SOFTWARE DEVELOPMENT</p>
                                        {this.state.programs.map(program =>
                                        <li class=" paddings-sm text-gray w-100 float-left">
                                            <div class=""></div>
                                            <div class="padding-sm"><b>{program.name}</b></div>
                
                
                                        </li>)}
                                    </div>   
                
                                    </div>
                                    <div class="center">
                                <div class="link-bodx text-bold flex-horizontal font-lg flex-center text-gray ">        
                                    <div class="link text-whitse btn-variant-3 fontsm"><Link to="/student/home">MY CLASSES</Link></div>  
                                    <div class="link btn-variant-3 text-white fontsm"><Link to="/calendar">CALENDAR</Link></div>   
                
                
                                    <div class="link text-white btn-variant-3 fontsm"><Link to="#courses">COURSES</Link></div>  
                                </div>
                            </div>
                            </div>
                
                        </div>
                    </div>

                    <Popular_Courses/>
                     <div class='w-box'>
                     <div class="w-50 reduced-full-width-x float-left">
                     <div class="Roboto text-gray paddingmd font-xl">What do you want in your career? <div class="border-bottom-gray"></div></div>
                    <p class="font-md Roboto w-80 paddingmd  text-gray">If you are new to DevOps, you may not have enough knowledge on all that exists in the world of development and deployment, DevOps is a very large field..</p>
                    <div class="link btn-variant-7 text-gray font-md text-bold float-left"><Link to="/calendar"><div class="center border-text">All about DevOps. <span class="font-xl">&gt;</span></div></Link></div>
                     </div>
                     <div class="w-50 resized-full-width-x float-left"><div class="Roboto text-white font-xl paddingmd">Speak to our career advisors. <div class="border-bottom-white"></div>

                     </div>

                     <p class="font-md Roboto w-5d0 paddingmd  text-white">Our career advisors will assist you in understanding the complex world of DevOps and the vast eco-system that surrounds it. Our professional assistance will help you in determining the best career path for a great future in tech.Talk to us today.</p>

                     <div class="link btn-variant-7 text-white font-md text-bold float-right"><Link to="/calendar"><div class="center"><span class="animate-bm">Speak to our career guides.</span> <span class="font-xl">&gt;</span></div></Link></div>
                     </div>

                     </div>
                     
                    <Testimonial/>
                    <Articles/>
                    <Contact_us/>
                    <Footer/>
                                   
                </div>
                );
    }
}
;
export default Home;
