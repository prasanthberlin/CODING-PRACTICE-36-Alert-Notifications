// Write your code here
import {Component} from 'react'
import {GrFormClose} from 'react-icons/gr'
import './index.css'

class Notification extends Component {
  getHeadingColor = differentColor => {
    switch (differentColor) {
      case 'Success':
        return 'success-color'
      case 'Error':
        return 'error-color'
      case 'Warning':
        return 'warning-color'
      case 'Info':
        return 'info-color'
      default:
        return null
    }
  }

  render() {
    const {children} = this.props
    const headingColor = this.getHeadingColor(children[0])
    return (
      <div className="notification-container">
        <div className="icon-container">
          <div className={`icon ${headingColor}`}>{children[1]}</div>
          <div className="alert-details-container">
            <h1 className={`main-heading-notification ${headingColor}`}>
              {children[0]}
            </h1>
            <p className="description">{children[2]}</p>
          </div>
        </div>
        <GrFormClose className="close-icon" />
      </div>
    )
  }
}

export default Notification
