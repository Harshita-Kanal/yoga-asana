import React, {Component} from 'react';
import './App.css';
import About from "./About"
import Cover from "./Cover"
import Leaderboard from './Leaderboard'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch, withRouter } from 'react-router-dom';
import  { auth, provider } from './firebase.js'
import Header from './Header'
import Practise from './Practise';
import Discussion from './Discussion';
import Profile from './Profile';
import Discuss from './stories/Discuss';
import Yoga from './yoga/yoga';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
      redirect: false
    }
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  
    logout() {
      auth.signOut()
        .then(() => {
          this.setState({
            user: null,
            redirect: true
          },  () => {
            this.props.history.push("/");
            return this.render(<Cover/>)
           })
        });
    }
    login() {
      auth.signInWithPopup(provider)
        .then((result) => {
          const user = result.user;
          this.setState({
            user
          });
        });
    }
  
    componentDidMount() {
      auth.onAuthStateChanged((user) => {
        if (user) {
          this.setState({ user });
        }
      });
    }
  
  
  render() { 
    return (
        <div> 
        <Header login={this.login} logout={this.logout} user={this.state.user} redirect = {this.props.redirect} />
        <BrowserRouter>
          <Switch>
          <Route
              path="/Practise"
              component={Practise}
            
            />
            <Route
              path="/About"
              component={About}
            
            />
            <Route
              path="/Leaderboard"
              component={Leaderboard}
            />
             <Route
              path="/yoga"
              component={Yoga}
            />
            {/* <Route
              path="/Discuss"
              component={Discussion}
            /> */}
             <Route
              path="/Discuss"
              // component={Discuss}
              component={() => <Discuss login={this.login} logout={this.logout} user={this.state.user} />}
            />
            <Route
              path="/Profile"
              component={() => <Profile login={this.login} logout={this.logout} user={this.state.user} redirect = {this.props.redirect}/>}
            
            />
             <Route
              path="/"
              component={Cover}
            
            />
          
          </Switch>
        </BrowserRouter>
        </div>
    );
    }
}

export default withRouter(App);