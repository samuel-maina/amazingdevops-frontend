import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import swal from 'sweetalert';
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'
import { TailSpin } from 'react-loader-spinner'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {title: "", contributor: "", about: "", article: [], loading: false,header:""};

    }

    async componentDidMount() {
this.setState({loading: true})
        const response = await axios.get("blog/" + this.props.match.params.id)
                .then((response) => {
                    this.setState({article: response.data});
            this.setState({header:response.data.headerImage.bigImage});
            this.setState({loading: false})
                }).catch((err) => {
        });


    }

    render() {
if(this.state.loading===true){
    
    return(   
            <div class="centerpage">
  <TailSpin
  height="120"
  width="120"
  color="crimson"
  ariaLabel="tail-spin-loading"
  radius="3"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
</div>)
}else
     return(
                <div class="margin-top-sm">
                    <Nav/>
                    <div class="article-header-md" style={{backgroundImage: `url(${'http://104.248.113.144:3030/'+this.state.header})`}}></div>
                    <div class="session font-sms">
                        <h2 class="play " >{this.state.article.title}</h2>
                        <div class=" border-bottom-crimson bg-crimson margin-top-xssm"></div>
                        <p class="font-xsm ">{this.state.article.contributor} | {this.state.article.date}</p>
                        <ReactMarkdown children={this.state.article.body} remarkPlugins={[remarkGfm]} />              
                    </div>
                
                
                
                </div>
                );
    }
}
export default Article;



