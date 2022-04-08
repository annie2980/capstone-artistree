import React from 'react';
import { Button } from 'react-bootstrap';
import YoutubeEmbed from "./YoutubeEmbed";

export default function Homepage() {
  return (
    <div>
      <main>
        <div id="Home" className="container tabContent">
        <h2>Artistree</h2>
        <h3>[ar-tist-tre] noun</h3>
          <p>A mobile application that connects fashion creatives, provides community support and resources, and encourages people to share their progress and achievements.
          </p>
        </div>
        <div className="flex-container">
        <section className="col c1">
          <div className="card-container">
            <div className="card-item" id="onboarding">
              <img src="img/splash.png" alt="splash" />
            </div>

            <div className="card-item" id="onboarding">
              <img src="img/onboard1.png" alt="onboarding screen 1" />
            </div>

            <div className="card-item" id="onboarding">
              <img src="img/onboard2.png" alt="onboarding screen 2" />
            </div>

            <div className="card-item" id="onboarding">
              <img src="img/onboard3.png" alt="onboarding screen 3" />
            </div>
          </div>
          </section>
        </div>
          <hr className="breakLine"/>
        <div className="video">
          <h2>Demo Video</h2>
          <YoutubeEmbed embedId="uFEGPA43bcU" />
        </div>
      </main>
      <hr className="breakLine"/>
      <footer>
        <h2>Acknowledgements</h2>
      </footer>
    </div>
  );
}
