// Write your code here

import {AiFillCheckCircle} from 'react-icons/ai'
import {RiErrorWarningFill} from 'react-icons/ri'
import {MdWarning, MdInfo} from 'react-icons/md'

import Notification from '../Notification'

import './index.css'

const AlertNotifications = () => (
  <div className="app-container">
    <div>
      <h1 className="main-heading">Alert Notifications</h1>
      <Notification>
        Success
        <AiFillCheckCircle />
        You can access all the files in the folder
      </Notification>
      <Notification>
        Error
        <RiErrorWarningFill />
        Sorry, you are not authorized to have access to delete the file
      </Notification>
      <Notification>
        Warning
        <MdWarning />
        Viewers of this file can see comments and suggestions
      </Notification>
      <Notification>
        Info
        <MdInfo />
        Anyone on the internet can view these files
      </Notification>
    </div>
  </div>
)

export default AlertNotifications
