import React from 'react';
import { Button } from 'react-bootstrap';

export default function OurTeam() {
  return (
    <div>
      <main>
          <div className="flex-container">
          <section className="col c1">
            <div className="card-container">
              <div className="card-item" id="profile">
                <img src="img/ja.png" alt="Jamila Aliyeva" />
                <h2 className="name">Jamila Aliyeva</h2>
                <p className="card-content">UI/UX Designer</p>
                <p className="card-content">jamila59@uw.edu</p>
              </div>

              <div className="card-item" id="profile">
                <img src="img/mj.png" alt="Manya Jain" />
                <h2 className="name">Manya Jain</h2>
                <p className="card-content">Product Manager & UI/UX Designer</p>
                <p className="card-content">mjain01@uw.edu</p>
              </div>

              <div className="card-item" id="profile">
                <img src="img/al.png" alt="Annie Liu" />
                <h2 className="name">Annie Liu</h2>
                <p className="card-content">Product Manager</p>
                <p className="card-content">annieliu@uw.edu</p>
              </div>
              <div className="card-item" id="profile">
                <img src="img/an.png" alt="Amy Nguyen" />
                <h2 className="name">Amy Nguyen</h2>
                <p className="card-content">UX Researcher</p>
                <p className="card-content">amyn27@uw.edu</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
