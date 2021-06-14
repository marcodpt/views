import {h, text} from 'https://unpkg.com/hyperapp'
import fas from './fas.js'

export default ({size}) => 
  fas({
    name: 'spinner',
    spin: true,
    size: size ? size : null
  })
