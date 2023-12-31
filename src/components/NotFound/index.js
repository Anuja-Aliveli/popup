// Write your code here
import Header from '../Header'
import './index.css'

const NotFound = () => (
  <div className="app-container">
    <Header />
    <div className="not-container">
      <img
        className="route-image-not"
        alt="not found"
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
      />
      <h1 className="error">Lost Your Way?</h1>
      <p className="text">
        Sorry, we cannot find that page. You will find lots to explore on the
        home page
      </p>
    </div>
  </div>
)
export default NotFound
