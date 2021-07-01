import {
  h as hp,
  text as textp
} from 'https://cdn.jsdelivr.net/npm/hyperapp@2.0.18/index.min.js'

const text = textp
const h = (tag, attrs, children) => 
  hp(tag, Object.keys(attrs).reduce((A, key) => {
    if (attrs[key] != null && attrs[key] !== false) {
      A[key] = attrs[key]
    }
    return A
  }, {}), children)

export {text, h}
