import {render} from "react-dom";
import React from "react";
import axios from 'axios';
class VerifyEmail2 extends React.Component {
    async componentDidMount() {
        await axios.post("users/student/signup/verify/"+this.props.match.params.id)
                .then((response) => {
                    this.setState({programs: response.data});
                }).catch((err) => {
            console.log(err.response.data);

        });
    }
    render() {
        return(
                <div class="">
                    <div id="plage" class="">
                
                        <div class=" center">
                            <div class="w-100 bg-variant padding-md height-max">
                                <p class="crimson-text Roboto"><b>Verified</b></p>
                                <p class="font-xsm">Proceed to login</p>
                            </div>
                        </div>
                    </div>
                </div>
                );
    }
}
;

export default VerifyEmail2;

