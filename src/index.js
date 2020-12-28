import React from 'react'
import styles from './styles.module.css'
import { BasicCronProvider } from './contexts/basic/BasicCronContext.jsx'
import Dashboard from './components/basicCron/dashboard/Dashboard'
import PropTypes from 'prop-types'


const Cron = ({ timeZone, tasks, dashboard }) => {
  const { hidden } = dashboard

  if (!hidden)
    return (
      <div className={styles.global}>
        <BasicCronProvider timeZone={timeZone} tasks={tasks}>
          <Dashboard />
        </BasicCronProvider>
      </div>
    )
  return (
    <div className={styles.global}>
      <BasicCronProvider timeZone={timeZone} tasks={tasks} />
    </div>
  )
}

Cron.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      fn: PropTypes.func.isRequired,
      id: PropTypes.string.isRequired,
      config: PropTypes.string.isRequired,
      name: PropTypes.string,
      description: PropTypes.string
    })
  ),
  dashboard: PropTypes.shape({
    hidden: PropTypes.bool.isRequired
  }),
  timeZone: PropTypes.string.isRequired
}

Cron.defaultProps = {
  tasks: [],
  dashboard: {
    hidden: false
  },
  timeZone: 'UTC'
}



export default Cron;
