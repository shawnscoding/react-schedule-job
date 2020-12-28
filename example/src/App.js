import React from 'react'
import Crontab from 'react-schedule-job'
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

  const close = () => {
    setOpen(false)
  }
  // this is the function which will run according to your settings

  const tasks = [
    {
      fn: sayHello,
      id: '1',
      config: '* * * * *',
      // this runs every minutes
      name: '',
      description: ''
    }
  ]

  return (
    <div>
      <button type="button" onClick={close}  >btn</button>
      <Crontab
        tasks={tasks}
        timeZone='local'
        // timezone is PC local timezone.
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