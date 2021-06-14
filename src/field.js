import {h, text} from 'https://unpkg.com/hyperapp'
import {fas, spinner} from './icon.js'
import link from './link.js'

const select = ({
  name,
  value,
  placeholder,
  disabled,
  status,
  options,
  change
}) => 
  h('select', {
    class: 'form-control'+(status || ''),
    name: name,
    disabled: disabled || options == null,
    onchange: change
  }, (options || []).reduce((O, o, i) => {
    var s = false
    var val = null
    var txt = ''
    if (o && typeof o == 'object') {
      if (o.value != null) {
        val = o.value
      } else if (o.id != null) {
        val = o.id
      }

      if (o.text != null) {
        txt = o.text
      } else if (o.id_ != null) {
        txt = o.id_
      } else {
        txt = val
      }
    } else {
      val = o
      txt = o == null ? '' : o
    }
    txt = String(txt)
    if (O.length > i && (value != null && String(value) == String(val))) {
      O.shift()
      s = true
    }
    O.push(
      h('option', {
        value: val,
        selected: s
      }, text(txt))
    )
    return O
  }, [
    h('option', {
      value: value,
      selected: true,
      disabled: true
    }, options ? (placeholder ? text(placeholder) : fas({
      name: 'hand-pointer'
    })) : spinner())
  ]))

const textarea = ({
  name,
  value,
  placeholder,
  disabled,
  status,
  rows,
  change
}) => 
  h('textarea', {
    class: 'form-control'+(status || ''),
    name: name,
    placeholder: placeholder,
    rows: rows || 6,
    disabled: disabled,
    oninput: change
  }, text(value))

const input = ({
  name,
  value,
  placeholder,
  disabled,
  status,
  type,
  change,
  checked
}) => 
  h('input', {
    class: (type == 'checkbox' ? 'form-check-input' : 'form-control')+
      (status || ''),
    type: type || 'text',
    value: value,
    name: name,
    placeholder: placeholder,
    disabled: disabled,
    oninput: type == 'checkbox' ? null : change,
    onclick: type == 'checkbox' ? change : null,
    checked: checked
  })

export default ({
  name,
  type,
  placeholder,
  value,
  href,
  options,
  error,
  disabled,
  change,
  rows
}) => {
  const status = error == null ? '' : (' is-'+(error ? 'in' : '')+'valid')
  if (name == null) {
    return link({
      title: String(value),
      href: typeof href == 'string' && href.length ? href : null
    })
  } else if (options !== undefined) {
    return select({
      name,
      placeholder,
      value,
      status,
      options,
      disabled,
      change
    })
  } else if (type == 'textarea') {
    return textarea({
      name,
      placeholder,
      value,
      status,
      disabled,
      change,
      rows
    })
  } else {
    return input({
      name,
      type,
      placeholder,
      value,
      status,
      disabled,
      change
    })
  }
}
