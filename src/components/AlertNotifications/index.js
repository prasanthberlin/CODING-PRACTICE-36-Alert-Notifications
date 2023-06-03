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
      <Notification
        Icon={AiFillCheckCircle}
        Heading="Success"
        Description="You can access all the files in the folder"
      />
      <Notification
        Icon={RiErrorWarningFill}
        Heading="Error"
        Description="Sorry, you are not authorized to have access to delete the file"
      />
      <Notification
        Icon={MdWarning}
        Heading="Warning"
        Description="Viewers of this file can see comments and suggestions"
      />
      <Notification
        Icon={MdInfo}
        Heading="Info"
        Description="Anyone on the internet can view these files"
      />
    </div>
  </div>
)

export default AlertNotifications
