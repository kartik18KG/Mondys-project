import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/home/home";
import allCourses from "./components/courses/allCourses";
import addCourse from "./components/courses/addCourse";
import liveStream from "./components/liveStream/liveStream";

import Footer from "./components/layout/Footer";
// import About from "./components/aboutUs/about";
// import Learn from "./components/learn/learn";
// import SignUp from "./components/auth/SignUp";
// import SignIn from "./components/auth/SignIn";
// import TopicNames from "./components/learn/TopicNames/TopicNames";
// import Articles from "./components/learn/articles/articles";
// import Dashboard from "./components/adminPanel/Dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/courses" component={allCourses} />
            <Route exact path="/courses/add" component={addCourse} />
            <Route exact path="/livestream" component={liveStream} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
