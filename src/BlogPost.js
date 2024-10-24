import React from "react";
import { Link,NavLink } from 'react-router-dom';
import Footer from './Footer';
import ContactUs from './Contact_us';
import Nav from './Nav';
import Blog from './Blog';
class BlogPost extends React.Component {
    render() {
        return(
                <div class=''>
                <Nav/>
                <Blog/>
                <Footer/>
                </div>        
        )}} export default BlogPost;


