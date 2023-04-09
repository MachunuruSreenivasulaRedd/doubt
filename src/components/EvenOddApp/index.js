import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    count: 0,
    isOddOrEven: 'Even',
  }

  incrementByRandom = () => {
    const randomNum = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + randomNum}))
    this.checkParity()
  }

  checkParity = () => {
    const {count} = this.state
    if (count % 2 === 0) {
      this.setState({isOddOrEven: 'Even'})
    } else {
      this.setState({isOddOrEven: 'Odd'})
    }
  }

  render() {
    const {count, isOddOrEven} = this.state
    return (
      <div className="box">
        <h1 className="heading">Count {count}</h1>
        <p>Count is {isOddOrEven}</p>
        <button
          className="button"
          type="button"
          onClick={this.incrementByRandom}
        >
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
