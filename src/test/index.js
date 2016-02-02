import assert from 'assert'
import toMutable from '../'

console.warn('TESTING => toMutable(initialState)')
let initialState = { obj: 'myobj', arr: ['arr1', 'arr2', { arr3: 'some' }]}
console.warn('--initialState--')
console.dir(initialState)
let state = toMutable(initialState)
assert.ok(state)
assert.deepEqual(initialState, state)
console.warn('--state--')
console.dir(state)
