import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from '../../assets/rightArrow.png';
const Programs = () => {
  return (
    <div className="Programs" id="programs">
      <div className="programs-header">
        <span className="stroke-text">explore our</span>
        <span>programs</span>
        <span className="stroke-text">to shape you</span>
      </div>
      <div className="program-categories">
        {programsData.map((item, index) => {
          return (
            <div className="category">
              {item.image}
              <span>{item.heading}</span>
              <span>{item.details}</span>
              <div className="join-now">
                <spam>Join Now</spam>
                <img src={RightArrow} alt="RightArrow" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
