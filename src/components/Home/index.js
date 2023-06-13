// Write your code here
import Header from '../Header'
import './index.css'

const Home = () => (
  <div className="app-container">
    <Header />
    <div className="home-container">
      <img
        className="route-image-lg"
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
      />
      <img
        className="route-image-sm"
        alt="home"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
      />
    </div>
  </div>
)
export default Home
