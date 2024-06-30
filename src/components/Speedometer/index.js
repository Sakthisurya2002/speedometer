import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  accelerate = () => {
    const {speed} = this.state
    if (speed < 200) {
      this.setState(prevState => ({speed: prevState.speed + 10}))
    }
  }

  brake = () => {
    const {speed} = this.state
    if (speed > 0) {
      this.setState(prevState => ({speed: prevState.speed - 10}))
    }
  }

  render() {
    const {speed} = this.state
    return (
      <div className="container">
        <h1>SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="img"
        />
        <h1 className="main">
          Speed is<span> {speed}</span>mph
        </h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div className="button-container">
          <button className="primary" type="button" onClick={this.accelerate}>
            Accelerate
          </button>
          <button className="secondary" type="button" onClick={this.brake}>
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
