// Write your code here

import {GrFormClose} from 'react-icons/gr'
import './index.css'

const Notification = props => {
  const {Heading, Icon, Description} = props

  const getHeadingColor = () => {
    switch (Heading) {
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

  const headingColor = getHeadingColor()

  return (
    <div className="notification-container">
      <div className="icon-container">
        <Icon className={`icon ${headingColor}`} />
        <div className="alert-details-container">
          <h1 className={`main-heading-notification ${headingColor}`}>
            {Heading}
          </h1>
          <p className="description">{Description}</p>
        </div>
      </div>
      <GrFormClose className="close-icon" />
    </div>
  )
}

export default Notification
