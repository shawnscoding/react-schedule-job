# react-schedule-job

React Schedule Job is a simple cron-like job scheduler for Reactjs. This module allows you to schedule jobs like triggering function or rendering component in reactjs.

[![NPM](https://img.shields.io/npm/v/react-schedule-job.svg)](https://www.npmjs.com/package/react-schedule-job) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<!-- **User Guide** at [https://d180vcwahe2y6s.cloudfront.net/build/index.html](https://d180vcwahe2y6s.cloudfront.net/index.html)

![Crontab Guide Demo](https://raw.githubusercontent.com/shawnscoding/reactjs-crontab/HEAD/assets/cronGuide.png) -->

## Getting Started

```bash
npm install --save react-schedule-job
```

## Usage 1

To schedule component, this code would be useful

```jsx
import React from 'react'
import Schedule from 'react-schedule-job'
import 'react-schedule-job/dist/index.css'

const styles = {
  text: {
    margin: '70px',
    color: 'skyblue'
  }
}

const HelloMsg = () => {
  return <h1 style={styles.text}>Hello!</h1>
}

const App = () => {
  const [open, setOpen] = React.useState(false)

  const sayHello = () => {
    setOpen(true)
  }
  // this is the function which will run according to your settings

  const jobs = [
    {
      fn: sayHello,
      id: '1',
      schedule: '* * * * *'
      // this runs every minutes
    }
  ]

  return (
    <div>
      <Schedule
        jobs={jobs}
        timeZone='UTC'
        // "UTC", "local" or "YOUR PREFERRED TIMEZONE",
        dashboard={{
          hidden: false
          // if true, dashboard is hidden
        }}
      />
      {open && <HelloMsg />}
    </div>
  )
}

export default App
```

Copying and pasting above code will render `<HelloMsg /> `

![usage 2 demo](https://raw.githubusercontent.com/shawnscoding/reactjs-crontab/HEAD/assets/usage_2_demo.png)

## Usage 2

To schedule function, this code would be useful

```jsx
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
    schedule: '* 15,19 * 11,12 *',
    // Execute In November, December At 3PM and 7PM every minute
    name: 'Request Something'
  }
]

const App = () => {
  return (
    <Schedule
      jobs={jobs}
      timeZone='Asia/Seoul'
      // "UTC", "local" or "YOUR PREFERRED TIMEZONE",
      dashboard={{
        hidden: false
        // if true, dashboard is hidden
      }}
    />
  )
}
export default App
```

Copying and pasting above code will result something like this below

![Dashboard Demo](https://raw.githubusercontent.com/shawnscoding/reactjs-crontab/HEAD/assets/dashboard.png)

This will do what it says at the scheduled time.

## Features

- **Supports All Timezones**
- **Supports All modern browsers**
- **No extra dependencies** except React
- **No style library** is used to style the components. **vanilla css** is used.
- Provide **specific error message**, you will find it so easy to debug.
- Provide **Dashboard** which enables easy monitoring of your cron
- Provide Demo website which helps you to easily set up your cron

## Cron-style Scheduling

```
 # ┌──────────── minute
 # │ ┌────────── hour
 # │ │ ┌──────── day of month
 # │ │ │ ┌────── month
 # │ │ │ │ ┌──── day of week
 # │ │ │ │ │
 # * * * * *
```

```
MIN HOUR DOM MON DOW
```

OR

Can be multiple values like this

```
 # ┌──────────── minute
 # │   ┌────────── hour
 # │   │   ┌──────── day of month
 # │   │   │ ┌────── month
 # │   │   │ │ ┌──── day of week
 # │   │   │ │ │
 # 1,2 6,7 * * *
```

```
MIN,MIN HOUR,HOUR DOM,DOM MON,MON DOW,DOW
```

### Allowed values

| field        | value             |
| ------------ | ----------------- |
| minute       | 0-59              |
| hour         | 0-23              |
| day of month | 1-31              |
| month        | 1-12              |
| day of week  | 1-7 (7 is Sunday) |

## API

```
Schedule Props {
  jobs: [
    {
      fn: yourFn,
      id: '1',
      schedule: '* 11 18 10,13 *',
      name: 'logUserOut',
      description: 'Send API'
    }
  ],
  timeZone: "UTC", "local" or "YOUR PREFERRED TIMEZONE",
  // supported timezone list here
  // https://github.com/shawnscoding/react-schedule-job/blob/master/TIMEZONES.md
  dashboard: {
    hidden: false
    // if true, dashboard is hidden
  }
}

Schedule.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      fn: PropTypes.func.isRequired,
      id: PropTypes.string.isRequired,
      schedule: PropTypes.string.isRequired,
      name: PropTypes.string,
      description: PropTypes.string
    })
  ),
  dashboard: PropTypes.shape({
    hidden: PropTypes.bool.isRequired
  }),
  timeZone: PropTypes.string.isRequired
}

Schedule.defaultProps = {
  jobs: [],
  dashboard: {
    hidden: false
  },
  timeZone: 'UTC'
}

```

## Important note

- Note that Schedule is triggered only once per minute. The seconds that is triggered is different everytime you run your reactjs app. It varies from 0s to 59s. This is because we don't schedule seconds. Thus, don't be surprised if it doesn't run as soon as the time condition met.

## Supported browsers

We use [browserslist](https://github.com/browserslist/browserslist) config to state the browser support for this lib, so check it out on [browserslist.dev](https://browserslist.dev/?q=ZGVmYXVsdHM%3D).

## Supported Timezones

supported timezone list [here](https://github.com/shawnscoding/react-schedule-job/blob/master/TIMEZONES.md)

## Note

- feel free to open issue. [react-schedule-job Github repo](https://github.com/shawnscoding/react-schedule-job). Any idea that could improve this package or bug report will be highly appreciated.
- We'll highly appreciate it if you promote this package to other devs in any way. We believe the appropriate usage of this package will save loads of thier time.

## License

MIT © [shawnscoding](https://github.com/shawnscoding/react-schedule-job/blob/master/LICENSE)
