// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {status: 'Subscribe'}

  onIncrement = () => {
    const {status} = this.state
    if (status === 'Subscribe') {
      this.setState(prevState => ({status: 'Subscribed'}))
    } else {
      this.setState(prevState => ({status: 'Subscribe'}))
    }
  }

  render() {
    const {status} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p>Thankyou! Happy Learning</p>
        <button className="button" onClick={this.onIncrement}>
          {status}
        </button>
      </div>
    )
  }
}

export default Welcome
