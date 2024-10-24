
import './App.css';
import Home from './Home';
import SetAuthToken from './SetAuthToken';
import RouteGuard from './RouteGuard';
import Logout from './Logout';
import StudentRegister from './StudentRegister';
import Calendar from './Calendar';
import BlogPost from './Blog';
import AboutUs from './AboutUs';
import Program from './Program';
import Course from './Course';
import Terms from './Terms';
import Login from './Login';
import PrivacyPolicy from './PrivacyPolicy';
import ReturnPolicy from './ReturnPolicy';
import VerifyEmail from './VerifyEmail';
import VerifyEmail2 from './VerifyEmail2';
import Article from './Article'
import Articles from './Articles';

import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
function App() {
    //check jwt token
   
    const token = localStorage.getItem("token");
    SetAuthToken(token);
    if (token) {
        SetAuthToken(token);
       
    }
    return (
            <div className="">
                <Router>
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/apply" component={StudentRegister}/>
                    <Route exact path="/blogging/article/:id" component={Article}/>
                    <Route exact path="/calendar" component={Calendar}/>
                    <Route exact path="/blog" component={BlogPost}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/articles" component={Articles}/>
                    <Route exact path="/about-us" component={AboutUs}/>
                    <Route exact path="/programs/:id" component={Program}/>
                    <Route exact path="/courses/:id" component={Course}/>
                    <Route exact path ="/terms-of-use" component={Terms}/>
                    <Route exact path ="/return-policy" component={ReturnPolicy}/>
                    <Route exact path ="/privacy-policy-2" component={PrivacyPolicy}/>
                    <Route exact path ="/registration/verify/token/:id" component={VerifyEmail2}/>                         
                    <Route exact path="/register/verify/email" component={VerifyEmail}/>
                    </Switch>
                </Router>
            </div>
            );
}

export default App;
