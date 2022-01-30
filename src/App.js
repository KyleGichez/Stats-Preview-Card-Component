import Image from './images/image-header-desktop.jpg';
function App() {
  return (
    <div className="App">
      <div className="app--container">
        <div className="app--container--card1">
          <h1 className="main--heading">Get <span className="insights">insights</span> that help your business grow.</h1>
          <p className="main--paragraph">Discover the benefits of data analytics and make better decisions regarding avenue, customer experience, and overall efficiency. </p>
            <div className="app--container--stats">
              <span>10k+ <br/> <p className="stat--headings">Companies</p></span>
              <span>314 <br/> <p className="stat--headings">Templates</p></span>
              <span>12M+ <br/> <p className="stat--headings">Queries</p></span>
            </div>
        </div>
        <div className="app--container--card2">
          <img src={Image} alt="work_place_image"/>
        </div>
      </div>
    </div>
  );
}

export default App;
