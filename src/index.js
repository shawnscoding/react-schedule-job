import React from 'react'
import styles from './styles.module.css'
import { BasicCronProvider } from './contexts/basic/BasicCronContext.jsx'
import Dashboard from './components/basicCron/dashboard/Dashboard'
import PropTypes from 'prop-types'


const Cron = ({ timeZone, jobs, dashboard }) => {
  const { hidden } = dashboard

  if (!hidden)
    return (
      <div className={styles.global}>
        <BasicCronProvider timeZone={timeZone} jobs={jobs}>
          <Dashboard />
        </BasicCronProvider>
      </div>
    )
  return (
    <div className={styles.global}>
      <BasicCronProvider timeZone={timeZone} jobs={jobs} />
    </div>
  )
}

Cron.propTypes = {
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      fn: PropTypes.func.isRequired,
      id: PropTypes.string.isRequired,
      schedule: PropTypes.string.isRequired,
      name: PropTypes.string,
    })
  ),
  dashboard: PropTypes.shape({
    hidden: PropTypes.bool.isRequired
  }),
  timeZone: PropTypes.string.isRequired
}

Cron.defaultProps = {
  jobs: [],
  dashboard: {
    hidden: false
  },
  timeZone: 'UTC'
}



export default Cron;
