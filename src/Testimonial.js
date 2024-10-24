/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class Testimonial extends Component {
    render() {
        return (
                <div class=''>
                    <Carousel dynamicHeight='false' infiniteLoop='true' width='100' showStatus='false' showArrow='false' autoPlay='true' axis='horizontal' showIndicators='false' showThumbs='false' >
                        <div class='h-50 center'>
                            <div class="flex-vertical text-left">
                                <div class='font-md  Roboto'><span class="material-symbols-rounded text-salmon rotate">
                                        format_quote
                                    </span>AmazingDevOps has great trainers. I trained with them for 6 months, and during that time, I was impressed by how thoughtfully they effectively resolved my queries and questions. They prepared me thoroughly for my career through excellent learning content, resume preparation, and job application support. The training was intensive, with many technical and hands-on projects that enhanced my ability to collaborate and understand the DevOps concepts, giving me the kind of thinking and knowledge a good DevSecOps Engineer needs.<span class="material-symbols-rounded text-salmon">
                                        format_quote
                                    </span></div> 
                                <div class="">
                                    <div class="text-bold font-md float-right ubuntu">Florianne K,Junior DevOps Engineer, USA</div>     
                                </div>
                                <div class=""><Link to="/" >
                                    <div className='nav-item btn-variant-5 font-bold' >
                                        MORE ABOUT US
                
                
                                    </div>
                                    </Link></div>
                            </div>
                        </div>
                        <div class='h-50 center'>
                            <div class="flex-vertical text-left">
                                <div class='font-md  Roboto'>
                                    <span class="material-symbols-rounded text-salmon rotate">
                                        format_quote
                                    </span>
                                    Thanks, Josh, for your comprehensive training program covering all software industry aspects. Your unique and amazing teaching methodology and dedication enabled me to get my first offer as a DevOps Engineer. With Josh, you get the right knowledge and skills you need in your dream job as a Cloud or DevOps Engineer. Join the program and see for yourself.
                                    <span class="material-symbols-rounded text-salmon">
                                        format_quote
                                    </span>
                                </div>
                                <div class="">
                                    <div class="text-bold font-md float-right ubuntu">George M,Senior DevOps Engineer, USA</div>     
                                </div>
                                <div class=""><Link to="/" >
                                    <div className='nav-item btn-variant-5' >
                                        MORE ABOUT US
                
                
                                    </div>
                                    </Link></div>
                            </div>
                
                        </div>
                
                    </Carousel>
                </div>
                );
    }
}
;
export default Testimonial;
