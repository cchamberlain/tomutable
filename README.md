# tomutable

Function to recursively convert a possibly immutable-js structure (at any depth) to a normal mutable object.

redux-dev-tools sometimes don't handle immutable state well.  Just chain through this function and then monitor state as a regular object tree.

# Install

`npm i tomutable --save`

# Usage

```js
import toMutable from 'tomutable'

...

const state = toMutable(maybeImmutableState)

// do stuff
```
