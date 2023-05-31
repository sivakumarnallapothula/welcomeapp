import './index.css'
import {Component} from 'react'

class Welcome extends Component {
  state = {ok: true}

  changeBtn = () => {
    const {ok} = this.state

    if (ok === true) {
      this.setState({ok: false})
    } else {
      this.setState({ok: true})
    }
  }

  render() {
    const {ok} = this.state

    return (
      <div className="welcome-bg-con">
        <div>
          <h1 className="welcome-heading">Welcome</h1>
          <p className="welcome-description">Thank you! Happy Learning</p>
          {ok ? (
            <button type="button" onClick={this.changeBtn}>
              Subscribe
            </button>
          ) : (
            <button type="button" onClick={this.changeBtn}>
              Subscribed
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Welcome
