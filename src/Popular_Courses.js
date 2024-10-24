import React from "react";
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
class Popular_Courses extends React.Component {
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
                <div class="">  
                
                    <div class="programss">
                        <div class="flex-horizontal">
                            <span class="font-vl bg-yellow center text-white">AmazingDevOps trains many courses under the following programs:</span>
                            <Link to="/programs" class="">
                            <div className='pointer float-right margin-sm animate-bm text-white  font-lg paddingmd center'>
                                <span class="animate-bm text-gray">  ALL PROGRAMS </span><span class="font-xl Ubuntu text-bold">&gt;</span>
                            </div>
                            </Link>                
                        </div>                
                        <div class="content-body-md session">
                            {this.state.programs.map(program =>
                                        <Link to={'/programs/' + program.id} class='ps  float-left'>
        <div class="  p-head" style={{backgroundImage: `url(${'http://104.248.113.144:3030/' + program.image.bigImage})`}}></div>                                
        <div class="">
                            
                                            <p class="padding-sm text-gray Roboto"><b>{program.name}</b></p>
                                            <div class="border-bottom-gray"></div>
                                            <p class="padding-sm font-sm">{(program.description).substring(0, 120) + "...."}</p>
                            
                            
                                        </div></Link>)} 
                        </div>
                
                        <div class="w-100">
                
                        </div>
                
                
                
                
                    </div>
                
                </div>
                );
    }
}
export default Popular_Courses;


