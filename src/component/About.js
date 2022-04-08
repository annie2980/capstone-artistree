import React from 'react';
import { Button } from 'react-bootstrap';

export default function AboutPage() {
  return (
    <div>
      <main>
        <div id="About" className="container tabContent">
        <p>ARTISTREE is a mobile application that connects fashion creatives, provides community support and resources, and encourages people to share their progress and achievements.
        </p>
        <h2 className="center-h2">PROBLEM STATEMENT</h2>
        <p>How might beginner fashion creatives achieve the ability to form a local community so that they can receive support and learn new skills?
        </p>
        <img className="about-img" src="img/problem_statement.jpg" alt="girl looking at a computer" />
        <h2 className="center-h2">STAKEHOLDERS</h2>
        <div className="flex-container">
        <section className="col c1">
          <div className="card-container">
            <div className="card-item" id="stakeholder 1">
            <p className="card-content">Any fashion creative </p>
            </div>

            <div className="card-item" id="stakeholder 2">
            <p className="card-content">Workshop/Event Coordinators</p>
            </div>

            <div className="card-item" id="stakeholder 3">
            <p className="card-content">People interested in learning fashion-related skills</p>
            </div>
          </div>
          </section>
        </div>
        <img className="about-img" src="img/Stakeholders.jpg" alt="group of people" />
        <h2 className="center-h2">KEY FEATURES</h2>
        <div className="flex-container">
        <section className="col c1">
          <div className="card-container">
            <div className="card-item" id="onboarding">
              <img src="img/community-support.png" alt="community support icon image" />
              <p className="card-content">Community Support</p>
            </div>

            <div className="card-item" id="onboarding">
              <img src="img/search.png" alt="search icon image" />
              <p className="card-content">Search</p>
            </div>

            <div className="card-item" id="onboarding">
              <img src="img/calendar.png" alt="calendar icon image" />
              <p className="card-content">Events Calendar</p>
            </div>

            <div className="card-item" id="onboarding">
              <img src="img/collab.png" alt="briefcase icon image" />
              <p className="card-content">Open to Collaboration</p>
            </div>
          </div>
          </section>
        </div>
        </div>
      </main>
    </div>
  );
}
