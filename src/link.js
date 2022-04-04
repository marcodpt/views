import {h, text} from '../lib.js'
import {fas, spinner} from './icon.js'

export default ({
  type,
  blur,
  click,
  href,
  size,
  title,
  icon,
  after,
  pending,
  dropdown,
  cls,
  description
}) => {
  title = (title == null ? '' : String(title)).trim() ||
    (!icon && !type && href ? '_' : '')
  const iconA = pending ? spinner({}) : !icon ? null : fas({name: icon})
  const iconB = !after ? null : fas({name: after})

  return h(href ? 'a' : (type ? 'button' : 'span'), {
    class: [
      type && type != 'close' ? 'btn' : '',
      type ? 'btn-'+type : '',
      size && type ? 'btn-'+size : '',
      pending || (type && !href && !click && !dropdown) ? 'disabled' : '',
      dropdown ? 'dropdown-toggle' : null
    ].concat(cls), 
    onclick: pending ? null : click,
    onblur: pending ? null : blur,
    href: typeof href == 'string' && href.length ? href : null,
    'data-bs-toggle': dropdown ? 'dropdown' : null,
    style: {
      cursor: !type && (dropdown || click) ? 'pointer' : null
    },
    title: description
  }, [
    iconA,
    iconA && (title || iconB) ? text(' ') : null,
    !title ? null : text(title),
    iconB && title ? text(' ') : null,
    iconB
  ])
}
