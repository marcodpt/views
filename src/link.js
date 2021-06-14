import {h, text} from 'https://unpkg.com/hyperapp'
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
  cls 
}) => {
  title = (title == null ? '' : String(title)).trim() ||
    (!icon && !type && href ? '_' : '')
  const iconA = pending ? spinner({}) : !icon ? null : fas({name: icon})
  const iconB = !after ? null : fas({name: after})

  return h(href ? 'a' : (type ? 'button' : 'span'), {
    style: {
      cursor: !type && (dropdown || click) ? 'pointer' : null,
      whiteSpace: title && title.indexOf("\n") != -1 ? 'pre-wrap' : null
    },
    class: [
      type ? 'btn btn-'+type : '',
      size && type ? 'btn-'+size : '',
      pending || (type && !href && !click && !dropdown) ? 'disabled' : '',
      dropdown ? 'dropdown-toggle' : '',
      cls ? cls : null
    ], 
    onclick: pending ? null : click,
    onblur: pending ? null : blur,
    href: typeof href == 'string' && href.length ? href : null,
    'data-bs-toggle': dropdown ? 'dropdown' : null
  }, [
    iconA,
    iconA && (title || iconB) ? text(' ') : null,
    text(title),
    iconB && title ? text(' ') : null,
    iconB
  ])
}
