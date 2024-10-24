import { Link, NavLink } from 'react-router-dom';
import React from "react";
import axios from 'axios';
class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {programs: [], courses: []};
    }
    async componentDidMount() {
        await axios.get("programs/")
                .then((response) => {
                    this.setState({programs: response.data});
                }).catch((err) => {


        });
        await axios.get("courses/")
                .then((response) => {
                    this.setState({courses: response.data});
                }).catch((err) => {


        });
    }

    render() {

        return (
                <div className="top-nav fontsm ">
                
                
                    <div class="smenu">
                        <Link to="/">
                        <img src="/images/amops.png" width="130px" class="paddingsm float-left"/>
                        </Link>
                
                        <div class="text-bold float-right" id="tofp-menu ">
                            <Link to="/" id="gethelp-parent">
                            <div className='nav-item  x' >
                                GET HELP
                
                            </div>
                            <div class="hidden gethelp paddingfsm" id="gethelp">
                
                                <li class="paddingsm animate-bm">
                                    <Link to="/help" class="w-100">Find Answers</Link>
                                </li>
                                <li class="paddingsm animate-bm">
                                    <a class="w-100">Chat now</a>
                                </li>
                                <li class="paddingsm animate-bm">
                                    <Link to="/help/query" class="w-100">Email us</Link> 
                                </li>
                            </div>
                            </Link> /
                            <Link to="tel:0208152149" >
                            <div className='nav-item x' >
                                0208152149
                
                
                            </div>
                            </Link>
                            /
                            <Link to="/" >
                            <div className='nav-item x' >
                                CURRENT STUDENTS
                
                
                            </div>
                            </Link>
                            /
                            <Link to="/login" >
                            <div className='nav-item x' >
                                LOGIN
                
                
                            </div>
                            </Link>
                            <Link to="/" >
                            <div className='nav-item btn-variant-5' >
                                REQUEST INFO
                
                
                            </div>
                            </Link>
                            <Link to="/apply">
                            <div className='nav-item btn-variant-3 ' >
                                APPLY NOW
                            </div>
                            </Link>
                        </div>
                        <div class="float-right text-white flex-horizontal" id="bottom-menu">
                            <div  id="programs" class="">
                                <div className='nav-item pointer' >
                                    Academic Programs
                                </div>
                                <div class="hidden dropdown w-100 font-xsm   " id="getprograms">
                                    <div class="overflow-scoll session">
                                        <span class="text-bold text-white font-lg">PROGRAMS</span>
                                        <div class="">
                
                                            <div class="content-body-xsm">
                                                {this.state.programs.slice(0, 5).map(program =>
                                <a href={'/programs/' + program.id} class='  bg-white'>
                                    <div class="  p-head" style={{backgroundImage: `url(${'http://104.248.113.144:3030/' + program.image.bigImage})`}}></div>                                
                                    <div class="">
                                        <p class="padding-sm text-gray Roboto"><b>{program.name}</b></p>
                                        <div class="border-bottom-gray"></div>
                                        <p class="padding-sm  font-sm">{(program.description).substring(0, 120) + "...."}</p>
                                    </div></a>)} 
                                            </div>
                                            <div class=" flex-vertifcal">
                                                <span class="text-bold text-white font-lg paddingsm play">Courses under our programs</span>
                
                                                <div class="flex-vertidcal border-left-white">
                                                    {this.state.courses.map(course =>
                                <div class=" paddingsm text-gray  float-left animate-bm border-1 margin-sm white-text">

                                    <Link to={'/courses/' + course.id} class="w-s100 text-white">{course.name}</Link> 


                                </div>)}
                                                </div>
                                                <Link to="/courses" >
                                                <div className='nav-item btn-variant-6' >
                                                    See all courses
                
                                                </div>
                                                </Link></div>
                                        </div>
                
                                    </div>
                
                                </div>
                            </div>
                
                            <Link to="/student/register">
                            <div className='nav-item ' >
                                Admissions
                            </div>
                            </Link>
                            <Link to="/about-us/">
                            <div class="nav-item">
                                About AmazingDevOps
                            </div>
                
                            </Link>
                            <Link to="/blog">
                            <div className='nav-item' title="Blog">
                                AmazingDevOps Blog
                            </div>
                            </Link>
                        </div>
                    </div>
                
                </div>
                );
    }
}
;
export default Nav;