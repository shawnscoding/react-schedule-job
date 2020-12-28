const handleNoneExistField = (job, keys) => {
  const { id, name, schedule, description, fn } = keys
  //   is undedined if user didn't specify
  if (!id || !schedule || !fn) {
    throw Error('Id, schedule, Fn are required fields in jobs props')
  }
  if (!name) {
    job.name = '*'
  }
  if (!description) {
    job.description = '*'
  }
  return job
}

const isFunction = (functionToCheck) => {
  return (
    functionToCheck && {}.toString.call(functionToCheck) === '[object Function]'
  )
}

export const validateValueTypes = (arr) => {
  return arr.map((job) => {
    const keysInObj = {}

    for (const key in job) {
      // throw error if value is not string
      if (key === 'fn') {
        const isfn = isFunction(job[key])
        if (!isfn) {
          throw Error('Type error in fn field')
        }
      } else if (typeof job[key] === typeof '') {
        // console.log(`field of ${key} is string`)
      } else {
        throw Error(`Type error in ${key} field`)
      }

      // find out how many and what field it contains

      if (key === 'id') {
        keysInObj.id = true
      }
      if (key === 'name') {
        keysInObj.name = true
      }
      if (key === 'schedule') {
        keysInObj.schedule = true
      }
      if (key === 'description') {
        keysInObj.description = true
      }
      if (key === 'fn') {
        keysInObj.fn = true
      }
    }

    const res = handleNoneExistField(job, keysInObj)
    return res
    // handle  nonexistent field
  })
}

export const validateConfigLength = (configArr) => {
  let msg = ''
  if (configArr.length === 5) {
    return { error: false, msg }
  }
  const leng = configArr.length
  msg = `Wrong syntax: Five values are required in schedule field but received ${leng.toString()}`
  return { error: true, msg }
}

export const isEmpty = (configArr) => {
  let msg = ''

  for (let i = 0; i < configArr.length; i++) {
    if (configArr[i] === '') {
      msg = `Wrong syntax: Unnecessary white space in schdule field`
      return { error: true, msg }
    }
  }

  return { error: false, msg }
}
