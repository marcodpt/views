import {h, text} from '../lib.js'

const fas = ({name, spin, size}) => 
  !name || typeof name != 'string' ? null : h('i', {
    class: 'fas fa-'+name.trim()+
      (spin ? ' fa-spin' : '')+
      (size ? ' fa-'+size : '')
  })

const spinner = ({size}) => 
  fas({
    name: 'spinner',
    spin: true,
    size: size ? size : null
  })

export {
  fas,
  spinner
}
