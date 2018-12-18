import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./styles.css";
import OnboardingPage from "./components/Onboarding/OnboardingIndex";
//import Login from "./components/Users/Login";
import MemberShow from "./components/Users/MemberShow";
import ProfileShow from "./components/Users/ProfileShow";
import MemberList from "./components/Users/MemberList";
//import Register from "./components/Users/Register";
import UploadContent from "./components/Users/UploadContent";
import PostIndex from "./components/Post/PostIndex";
import NavBar from "./components/NavBar";
import LogInForm from './components/Forms/LogInForm';
import SignUpForm from './components/Forms/SignUpForm';
import Dashboard from "./components/Users/Dashboard";
import UserSettings from "./components/Users/UserSettings";

class App extends Component {

constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: ''
    };
  }

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://localhost:8000/api/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username });
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://localhost:8000/api/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LogInForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignUpForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }

    return (
      <div>
          <Router>
            <div>

             {/* ↓ Later we must move this to all the necessary pages. ↓ */}
            <Switch>

              {/* routes for users */}
              <Route exact path="/" component={OnboardingPage} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/member/:userId" component={MemberShow} />
              <Route path="/profile/:userId" component={ProfileShow} />
              <Route path="/creators" component={MemberList} />
              <Route path="/upload" component={UploadContent} />
              <Route path="/settings" component={UserSettings} />
              {/* routes for posts */}
              <Route path="/posts" component={PostIndex} />

            </Switch>
            <div className="App">
        <NavBar
          logged_in={this.state.logged_in}
          display_form={this.display_form}
          handle_logout={this.handle_logout}
        />
        {form}
        <h3>
          {this.state.logged_in
            ? `Hello, ${this.state.username}`
            : 'Please Log In'}
        </h3>
      </div>
      </div>
        </Router>
      </div>




    );
  }
}


export default App;
