import {h, text, app} from 'https://unpkg.com/hyperapp'
import icon from './tests/icon.js'
import data from './tests/data.js'
import link from './tests/link.js'
import field from './tests/field.js'

const Tests = []
  .concat(icon)
  .concat(data)
  .concat(link)
  .concat(field)

Tests.forEach(test => {
  const view = test[1]
  const checkView = (assert, params, html, info) => {
    const a = document.createElement('div')
    const b = document.createElement('div')
    app({
      init: params,
      view: state => 
        h('div', {}, [
          view(state)
        ]),
      node: a
    })
    b.innerHTML = html
    const done = assert.async()
    setTimeout(() => {
      assert.deepEqual(a.innerHTML, b.innerHTML, info)
      done()
    }, 50)
  }
  QUnit.test(test[0], assert => {
    test[2].forEach(X => {
      checkView(assert, X[0], X[1], X[2])
    })
  })
})
