import {h, text} from '../lib.js'
import link from './link.js'

const change = callback => (state, ev) => {
  const v = ev.target.value
  return [state, [
    (dispatch, ev) => {
      setTimeout(() => {
        if (ev.target.value === v) {
          dispatch(state => callback(state, ev))
        }
      }, 200)
    },
    ev
  ]]
}

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
    class: [
      'form-control',
      status
    ],
    name: name,
    disabled: disabled || options == null,
    onchange: change
  }, (options || []).reduce((O, o, i) => {
    var val = null
    var lbl = ''
    if (o && typeof o == 'object') {
      if (o.value != null) {
        val = o.value
      } else if (o.id != null) {
        val = o.id
      }

      if (o.label != null) {
        lbl = o.label
      } else if (o.id_ != null) {
        lbl = o.id_
      } else {
        lbl = val
      }
    } else {
      val = o
      lbl = o == null ? '' : o
    }
    const l = O.length
    const P = {
      value: val,
      label: lbl
    }
    if (l > i && (value != null && value == val)) {
      O.pop()
      P.selected = true
    }
    const X = h('option', P) 
    l > i ? O.splice(l - 1, 0, X) : O.push(X)
    return O
  }, [
    h('option', {
      value: value == null ? '' : value,
      selected: true,
      disabled: true
    }, text(options ? (placeholder || '\u2304') : '\u231B'))
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
    class: [
      'form-control',
      status
    ],
    name: name,
    placeholder: placeholder,
    rows: rows || 6,
    disabled: disabled,
    oninput: change,
    value: value
  })

const input = ({
  name,
  value,
  placeholder,
  disabled,
  status,
  type,
  change,
  checked,
  step,
  min,
  max
}) => {
  const isCheck = [
    'checkbox',
    'radio'
  ].indexOf(type) != -1

  const isChange = [
    'file',
    'files',
    'date',
    'range'
  ].indexOf(type) != -1

  const isRange = [
    'number',
    'date',
    'range'
  ]

  const N = {}
  if (step != null) {
    N.step = step
  }
  if (min != null) {
    N.min = min
  }
  if (max != null) {
    N.max = max
  }

  return h('input', {
    class: [
      (isCheck ? 'form-check-input' : 'form-control'),
      !isCheck ? status : null
    ],
    type: type == 'files' ? 'file' : (type || 'text'),
    value: value,
    name: name,
    placeholder: isCheck ? null : placeholder,
    disabled: disabled,
    onchange: isChange ? change : null,
    oninput: isCheck || isCheck ? null : change,
    onclick: isCheck ? change : null,
    checked: isCheck ? checked : null,
    multiple: type == 'files' ? true : null,
    ...N
  })
}

export default (X) => {
  const P = [
    'name',
    'placeholder',
    'disabled',
    'value',
    'change'
  ].reduce((P, key) => {
    if (X[key] != null) {
      P[key] = X[key]
    }
    return P
  }, {})
  if (X.error != null) {
    P.status = 'is-'+(X.error ? 'in' : '')+'valid'
  }

  if (X.options !== undefined) {
    return select({
      ...P,
      options: X.options
    })
  } else if (X.type == 'textarea') {
    return textarea({
      ...P,
      rows: X.rows
    })
  } else {
    return input({
      ...P,
      type: X.type,
      step: X.step,
      min: X.min,
      max: X.max,
      checked: X.checked
    })
  }
}
