// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  randomNum = () => Math.ceil(Math.random() * 100)

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + this.randomNum()}))
  }

  render() {
    const {count} = this.state
    let isEvenOrOdd

    if (count % 2 === 0) {
      isEvenOrOdd = <p className="even-odd"> Count is Even</p>
    } else {
      isEvenOrOdd = <p className="even-odd"> Count is Odd</p>
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="head"> Count {count} </h1>
          {isEvenOrOdd}
          <button type="button" className="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para"> *Increase By Random Number Between 0 to 100 </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
