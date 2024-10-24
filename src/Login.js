

import { render } from "react-dom";
import React, { useState } from "react";
import SetAuthToken from './SetAuthToken';
import axios from 'axios';
import Nav from './Nav';
import Footer from './Footer';
import ContactUs from './Contact_us';
import ChartBar from './ChartBar/ChartBar.tsx';
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class StudentRegister extends React.Component {
    constructor(props) {
        super(props);
        this.state = {email: '', firstname: '', lastname: '', address: '', phone: '', error: '', next: false, previous: true, password: '', passwordConfirm: '', passwordmatch: '', confirm: false, activationCode: ''};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleFirstnameChange = this.handleFirstnameChange.bind(this);
        this.handleLastnameChange = this.handleLastnameChange.bind(this);
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.previous = this.previous.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleActivationCodeSubmit = this.handleActivationCodeSubmit.bind(this);
        this.handleActivationCodeChange = this.handleActivationCodeChange.bind(this);
        this.handlePasswordConfirmChange = this.handlePasswordConfirmChange.bind(this);
    }
    handleEmailChange(event) {
        this.setState({email: event.target.value});

    }

    handleFirstnameChange(event) {
        this.setState({firstname: event.target.value});
    }
    handleLastnameChange(event) {
        this.setState({lastname: event.target.value});
    }
    handleAddressChange(event) {
        this.setState({address: event.target.value});
    }
    handlePhoneChange(event) {
        this.setState({phone: event.target.value});
    }
    async handlePasswordChange(event) {
        await this.setState({password: event.target.value});
        if (this.state.password === this.state.passwordConfirm) {
            this.setState({passwordmatch: "Passwords match"});
        } else {
            this.setState({passwordmatch: "Passwords do not match"});
        }
    }
    async handlePasswordConfirmChange(event) {
        await this.setState({passwordConfirm: event.target.value});
        if (this.state.password === this.state.passwordConfirm) {
            this.setState({passwordmatch: "Passwords match"});
        } else {
            this.setState({passwordmatch: "Passwords do not match"});
            console.log(this.state.password + " " + this.state.passwordConfirm);
        }
    }
    async handleActivationCodeChange(event) {
        this.setState({activationCode: event.target.value});
    }

    handleSubmit(event) {
        var user = {email: this.state.email, firstname: this.state.firstname, lastname: this.state.lastname, address: this.state.address, phone: this.state.phone, password: this.state.password};
        const response = axios.post("http://161.35.222.102:8080/api/v1/users/students/signup", user)
                .then((response) => {
                    this.setState({confirm: true});
                    //window.location.href = '/student/login';
                }).catch((err) => {
            console.log(err.response.data);

            this.setState({error: err.response.data});
        });
        event.preventDefault();
    }

    handlePassword(event) {
        this.setState({next: true});
        event.preventDefault();
    }
    previous(event) {
        this.setState({next: false});
        event.preventDefault();
    }
    handleActivationCodeSubmit(event) {
        var user = {email: this.state.email, activationCode: this.state.activationCode};
        const response = axios.post("http://161.35.222.102:8080/api/v1/users/activate", user)
                .then((response) => {
                    window.location.href = '/student/login';
                }).catch((err) => {
            console.log(err.response.data);

            this.setState({error: err.response.data});
        });
        event.preventDefault();
    }

    render() {

        return(<div id="plage" class="content-body">
            <Nav/>
            <ChartBar/>
            <div class="margin-top-md session Roboto font-lg">Login Action <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div>
                <div class="three-per-row flex-center">
        
                    <div class="search bg-white-red">
                        <div class="  margin-sm ">
        
        
        
        
                            <div class="paddidng-sm-fixed">
                                <p class="font-md text-bold text-gray Roboto">Student login</p>
                                <div class="clusters">
        
        
                                </div>
                                <p class="font-xsm "></p>
                            </div>
                            <div class="w-box-small float-left"><div class="w-50 float-right"><span class="material-symbols-outlined padding-md center text-bold font-lg">
                                        arrow_right_alt
                                    </span></div></div>
                        </div>
        
        
                    </div>
                    <div class="search">
                        <div class="  margin-sm ">
        
        
        
        
                            <div class="paddidng-sm-fixed">
                                <p class="font-md text-bold text-gray Roboto">Instructor login</p>
                                <div class="clusters">
        
        
                                </div>
                                <p class="font-xsm "></p>
                            </div>
                            <div class="w-box-small float-left"><div class="w-50 float-right"><span class="material-symbols-outlined padding-md center text-bold font-lg">
                                        arrow_right_alt
                                    </span></div></div>
                        </div>
        
        
                    </div>
                    <div class="search">
                        <div class="  margin-sm ">
        
        
        
        
                            <div class="paddidng-sm-fixed">
                                <p class="font-md text-bold text-gray Roboto">Staff</p>
                                <div class="clusters">
        
        
                                </div>
                                <p class="font-xsm "></p>
                            </div>
                            <div class="w-box-small float-left"><div class="w-50 float-right"><span class="material-symbols-outlined padding-md center text-bold font-lg">
                                        arrow_right_alt
                                    </span></div></div>
                        </div>
        
        
                    </div>
                </div>
            </div>
            <Footer/>
        </div>);

    }

}
;
export default StudentRegister;



