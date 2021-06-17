import {h as hp, text as textp} from 'https://unpkg.com/hyperapp'

const html = str => str.replace(/>[\s\r\n]*</g, "><").trim()
const text = textp
const h = (tag, attrs, children) => 
  hp(tag, Object.keys(attrs).reduce((A, key) => {
    if (attrs[key] != null && attrs[key] !== false) {
      A[key] = attrs[key]
    }
    return A
  }, {}), children)

export {
  html,
  text,
  h
}
