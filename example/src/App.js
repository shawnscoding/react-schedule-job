import React from 'react'
import Schedule from 'react-schedule-job'
import 'react-schedule-job/dist/index.css'

const sayHello = () => {
  console.log('Hello')
}

const RequestSomething = () => {
  console.log('Api request has been sent')
}

// these are the functions which will run according to the schedule

const jobs = [
  {
    fn: sayHello,
    id: '1',
    schedule: '* * * * *',
    // Execute every minutes
    name: 'Say Hello'
  },
  {
    fn: RequestSomething,
    id: '3',
    schedule: '* 16 * 11,12 *',
    // Execute In November, December At 3PM and 7PM every minute
    name: 'Request Something'
  }
]

const App = () => {
  return (
    <Schedule
      jobs={jobs}
      timeZone='UTC'
      // timezone is UTC timezone.
      dashboard={{
        hidden: false
        // if true, dashboard is hidden
      }}
    />
  )
}
export default App