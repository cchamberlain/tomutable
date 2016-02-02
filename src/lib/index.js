export default function toMutable(state) {
  if(!state || typeof state !== 'object')
    return state
  if(state && state.toJS)
    return state.toJS()
  if(Array.isArray(state)) {
    return state.map(obj => {
      if(typeof obj !== 'object')
        return obj
      if(obj && obj.toJS)
        return obj.toJS()
      return toMutable(obj)
    })
  }
  return Object.keys(state).reduce((prev, key) => {
    if(typeof state[key] === 'object')
      return Object.assign({}, prev, { [key]: toMutable(state[key]) })
    return Object.assign({}, prev, { [key]: state[key] })
  }, {})
}
