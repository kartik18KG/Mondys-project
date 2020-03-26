import React, { Component } from "react";
import MainCarousel from "./topcarousel";
import CoursePreview from "./CoursesPreview";
import HomeVideo from "./HomeVideo";
import JoiningSlide from "./JoinSlide";
import "./css/home.css";
import UspSlide from "./UspSlide";

class Home extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="">
        <div className="main-carousel">
          <MainCarousel />
        </div>

        <div className="course-preview ">
          <div className="course-preview-heading">
            Master new faster skills faster than ever
            <div className="course-preview-heading2">
              Choose from many fast-paced short courses
            </div>
          </div>

          <CoursePreview />

          <div className="home-video">
            <HomeVideo />
          </div>
          <div>
            <UspSlide />
          </div>
          <div className="join-slide">
            <JoiningSlide />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
