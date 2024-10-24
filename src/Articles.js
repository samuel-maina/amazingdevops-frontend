/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import axios from 'axios';
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};
class Articles extends Component {
    constructor(props) {
        super(props);
        this.state = {articles: [], loading: false, responsive: {
                superLargeDesktop: {
                    // the naming can be any, depends on you.
                    breakpoint: {max: 4000, min: 3000},
                    items: 5
                },
                desktop: {
                    breakpoint: {max: 3000, min: 1024},
                    items: 4
                },
                tablet: {
                    breakpoint: {max: 1024, min: 464},
                    items: 2
                },
                mobile: {
                    breakpoint: {max: 464, min: 0},
                    items: 1
                }
            }};

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
        return (
                <div class="w-100 ">
                    <div class=" w-100  float-left"><Link to="/blog"><div class=" link btn-variant-7 font-md text-bold text-white center border-text"><u>AmazingDevOps Blog </u><span class="font-xl">&gt;</span></div></Link></div>
                    <div class='sessiond'>
                .
                        <Carousel responsive={this.state.responsive} showDots={true} class="content-body-md">
                
                            {this.state.articles.map(article => <Link to={'blogging/article/' + article.id} class="w-90 margin-md-min p border-rald-md pointer padding-sm margin-max bg-varifant-1  float-left">
                            <div class="article-header-sm" style={{backgroundImage: `url(${'http://104.248.113.144:3030/'+article.headerImage.smallImage})`}}></div>  
                            <div class="text-bold font-vl-md bg-crimdson w-100 text-white bottom-0 play text-blue"><u>{article.title}</u></div>
                            <span class="text-gray font-sm">{new Date(article.date).toLocaleDateString('en-us', {month: "long", day: "numeric", year: "numeric"})}</span>
                            <div class="poppins-2 padding-md text-gray">{article.about}</div>
                
                            </Link>)}
                
                
                
                
                        </Carousel>
                    </div>
                </div>
                );
    }
}
;
export default Articles;
