import React from 'react'
import Schedule from 'react-schedule-job'
import 'react-schedule-job/dist/index.css'
//copy and paste this code and run!
    
const function_1 = () => {
  console.log("called ! ")
};
  
const function_2 = () => {
  console.log("called ! ")

};
  
const function_3 = () => {
  console.log("called ! 3")

};
  

    
const jobs = [
      {
        fn: function_1,
        id: '1',
        schedule: '* * * * *',
      }
    ,
      {
        fn: function_2,
        id: '2',
        schedule: '* * * * *',
      }
    ,
      {
        fn: function_3,
        id: '3',
        schedule: '* * * 3,5 *',
      }
    ]
    
const App = () => {
    return (
      <Schedule 
        jobs={jobs}
        timeZone='UTC'
        dashboard={{ hidden: false }}
      />
    )
}
    
export default App