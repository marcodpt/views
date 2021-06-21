import {h as hp, text as textp} from 'https://unpkg.com/hyperapp'
import lang from './lang.js'

const html = str => str.replace(/>[\s\r\n]*</g, "><").trim()
const text = textp
const h = (tag, attrs, children) => 
  hp(tag, Object.keys(attrs).reduce((A, key) => {
    if (attrs[key] != null && attrs[key] !== false) {
      A[key] = attrs[key]
    }
    return A
  }, {}), children)
const translate = language => key =>
  (lang[language] || lang.en || {})[key] || key

export {
  html,
  text,
  h,
  translate
}
