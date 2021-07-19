import {h, text} from '../lib.js'

const fas = ({name, spin, size}) =>  {
  if (typeof name != 'string' || !name.length) {
    return null
  }
  name = name.trim()
  if (!name.length) {
    return null
  }
  const isBrand = name.substr(0, 1) == '@'
  const type = isBrand ? 'fab' : 'fas'
  const icon = isBrand ? name.substr(1) : name 

  return h('i', {
    class: type+' fa-'+icon+
      (spin ? ' fa-spin' : '')+
      (size ? ' fa-'+size : '')
  })
}

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
