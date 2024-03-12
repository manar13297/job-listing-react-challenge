import './App.css';

function App() {
  return (
<>
  <header >
    <img src='./images/bg-header-desktop.svg' alt=""/>
  </header>

  <div className="main-container">
    <div className="filter-container">
      <div className="job-tag">Frontend <span>X</span></div>
      <div className="job-tag">Senior <span>X</span></div>
      <div className="job-tag">Senior <span>X</span></div>
      <div className="job-tag">Senior <span>X</span></div>
      <div className="job-tag">Senior <span>X</span></div>
      <div className="job-tag">Senior <span>X</span></div>
      <div className="job-tag">Senior <span>X</span></div>
      <span>Clear</span>
    </div>

    <div className="job-listing">
      <div className="job-card">
          <div className="left-content">
            <img src="./images/photosnap.svg" alt=""/>

              <div className="company-details">
                <div className="company-name">
                  <span>Photosnap</span>
                  <span className="etiquette etiquette-new">NEW!</span>
                  <span className="etiquette etiquette-featured">FEATURED</span>
                </div>
                <div className="position">Senior FrontEnd Developer</div>
                <div className="job-info">
                  <div>1d ago</div> &middot;
                  <div>Full Time</div>&middot;
                  <div>USA only</div>
                </div>
              </div>
          </div>
        <hr className="mobile-only"/>

        <div className="right-content">
          <div className="job-tag">Frontend</div>
          <div className="job-tag">Senior</div>
          <div className="job-tag">HTML</div>
          <div className="job-tag">CSS</div>
          <div className="job-tag">JavaScript</div>
        </div>
      </div>

      <div className="job-card">

        <div className="left-content">
          <img src="./images/myhome.svg" alt=""/>

          <div className="company-details">
            <div className="company-name">
              <span>My home</span>
            </div>
            <div className="position">Senior FrontEnd Developer</div>
            <div className="job-info">
              <div>5d ago</div> &middot;
              <div>Contract</div>&middot;
              <div>USA only</div>
            </div>
          </div>
        </div>
        <hr className="mobile-only"/>

        <div className="right-content">
          <div className="job-tag">Frontend</div>
          <div className="job-tag">Junior</div>
          <div className="job-tag">CSS</div>
          <div className="job-tag">JavaScript</div>
        </div>
      </div>

    </div>
  </div>
</>
  );
}

export default App;
