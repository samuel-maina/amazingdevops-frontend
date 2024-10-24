import { render } from "react-dom";
import React, { useState } from "react";
import axios from 'axios';
import Nav from './Nav';
import swal from 'sweetalert';
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'
import ReactCrop from 'react-image-crop'
import Footer from './Footer';
import { TailSpin } from 'react-loader-spinner'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
class BlogContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {articles: [], loading: false};

    }
    async componentDidMount() {
        this.setState({loading: true});
        const response = await axios.get("blog/")
                .then((response) => {
                    this.setState({articles: response.data});
                    this.setState({loading: false});
                }).catch((err) => {
        });
    }

    render() {
        if (this.state.loading === true) {

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
        } else
            return(
                    <div class="margin-top-sm">
                        <Nav/>
                        <div class="program-header "><div class="font-xl  margin-top-md Robosto text-bold session text-gray">AMAZINGDEVOPS <span class="text-salmon">BLOGS</span></div></div>
                    
                    
                        <div class=" border-bottom-crimson list-header-margin  bg-crimson margin-top-xssm"></div>
                        <div class="  content-body-md session">
                            {this.state.articles.map(article => <Link to={'blogging/article/' + article.id} class=" ps pointer">
                            <div class="article-header-sm" style={{backgroundImage: `url(${'http://104.248.113.144:3030/'+article.headerImage.smallImage})`}}></div> 
                            <div class="text-bold font-vl-md bg-crimdson w-100 text-white bottom-0 play text-blue"><u>{article.title}</u></div>
                            <p class="text-gray font-sm">{new Date(article.date).toLocaleDateString('en-us', {month: "long", day: "numeric", year: "numeric"})}</p>
                    
                            <div class="poppins-2 padding-md text-gray ">{article.about}</div>
                            </Link>)}
                        </div>
                    <Footer/>
                    </div>
                    );
    }
}
export default BlogContainer;



