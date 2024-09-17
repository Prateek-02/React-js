import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="header">Header</div>
        <div className="nav-container">
          <ul className="nav-list">
            <li>Home</li>
            <li>Our Team</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
          <div className="search-container">
            <input type="text" placeholder="Search query" />
            <button>Go!</button>
          </div>
        </div>
      </nav>

      <div className="main-layout">
        <div className="content-section">
          <h1 className="main-heading">Article Heading</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec elit a arcu dictum facilisis.
            Integer feugiat lacus at nulla fermentum, sed molestie nisi auctor.
            Pellentesque tempus fermentum diam.
          </p>
          <h2>Subsection</h2>
          <p>
            Fusce in eros sed dolor placerat efficitur. Suspendisse potenti. 
            Vivamus malesuada elit sed orci eleifend, ut vehicula lacus dapibus. Etiam scelerisque neque sed mi ultricies, ac tempus justo vulputate.
          </p>
          <p>
            Morbi tristique eros ac orci fermentum, a dignissim odio fermentum. Aliquam erat volutpat.
           Sed vehicula urna vitae tincidunt ultrices. Cras in nisi ac velit vehicula aliquet non sit amet est.

          </p>
          <h2>Another Subsection</h2>
          <p>
            Duis finibus sapien ac orci efficitur, non ultricies felis feugiat. 
            In hac habitasse platea dictumst. Vivamus suscipit, sapien ac vehicula ultrices, odio libero sodales urna, a convallis erat urna.
          </p>
          <p>
            Praesent fringilla, magna vel consectetur posuere, sapien lectus convallis justo, ut dapibus purus libero at purus.
            Sed ultricies turpis at nulla auctor, vel hendrerit enim suscipit. Pellentesque habitant.
          </p>
        </div>

        <aside className="related-section">
          <h2>Related</h2>
          <ul className="related-list">
            <li>Oh i do like to be beside the seaside</li>
            <li>Oh i do like to be beside the seaside</li>
            <li>Although in the north of England</li>
            <li>It never stops raining</li>
            <li>oh well</li>
          </ul>
        </aside>
      </div>

      <footer className="footer">
        <p>© 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
