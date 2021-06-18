import {h, text, app} from 'https://unpkg.com/hyperapp'
import icon from './tests/icon.js'
import data from './tests/data.js'
import link from './tests/link.js'
import field from './tests/field.js'
import form from './tests/form.js'
import table from './tests/table.js'
import nav from './tests/nav.js'

const Tests = []
  .concat(icon)
  .concat(data)
  .concat(link)
  .concat(field)
  .concat(form)
  .concat(table)
  .concat(nav)

const state = {
  views: Tests.reduce((V, test) => {
    V[test[0]] = test[1]
    return V
  }, {}),
  samples: Tests.reduce((S, test) => {
    S[test[0]] = test[2].reduce((T, X) => {
      T[X[2]] = X[0]
      return T
    }, {})
    return S
  }, {})
}
const setView = (state, view) => {
  state.view = view || Object.keys(state.views)[0]
  state.sample = Object.keys(state.samples[state.view])[0]
  state.params = state.samples[state.view][state.sample]
  state.error = ''
  return {...state}
}
const source = X => {
  const ident = A => A.join(',\n').split('\n').join('\n  ')
  if (X instanceof Array) {
    return !X.length ? '[]' : `[\n  ${
      ident(X.map(x => source(x)))
    }\n]`
  } else if (typeof X == 'function') {
    return X.toString()
  } else if (X && typeof X == 'object') {
    const K = Object.keys(X)
    return !K.length ? '{}' : `{\n  ${
      ident(K.map(key => `${key}: ${source(X[key])}`))
    }\n}`
  } else {
    return JSON.stringify(X)
  }

  return data
}

window.addEventListener('load', () => app({
  init: setView(state), 
  view: ({
    view,
    views, 
    samples,
    sample,
    params,
    error
  }) => {
    console.log({
      view,
      views, 
      samples,
      sample,
      params,
      error
    })
    return h('body', {}, [
      h('div', {
        class: 'container mt-5'
      }, [
        h('h1', {}, text('Views')),
        h('p', {}, [
          h('a', {
            href: "tests.html"
          }, text('tests!'))
        ]),
        h('div', {
          class: 'mb-3'
        }, [
          h('select', {
            class: 'form-control',
            value: view,
            onchange: (state, ev) => setView(state, ev.target.value)
          }, Object.keys(views).map(view => 
            h('option', {
              value: view
            }, text(view))
          ))
        ]),
        h('div', {
          class: 'mb-3'
        }, [
          h('select', {
            class: 'form-control',
            value: sample,
            onchange: (state, ev) => {
              state.sample = ev.target.value
              state.params = state.samples[view][state.sample]
              state.error = ''
              console.log(state)
              return {...state}
            }
          }, Object.keys(samples[view]).map(sample =>
            h('option', {
              value: sample
            }, text(sample))
          ))
        ]),
        h('div', {
          class: 'mb-3'
        }, [
          h('textarea', {
            class: [
              'form-control',
              error ? 'is-invalid' : 'is-valid'
            ],
            rows: 10,
            value: error ? params : source(params),
            onchange: (state, ev) => {
              var err = null
              try {
                var p = null
                eval('p = '+ev.target.value)
                state.params = p
                state.error = ''
              } catch (error) {
                state.params = ev.target.value
                state.error = 'Error in evaluating javascript'
                err = error
              }
              return [
                {...state},
                !err ? null : [
                  (dispatch, err) => setTimeout(() => alert(err), 100),
                  err
                ]
              ]
            }
          }),
          !error ? null : h('div', {
            class: 'invalid-feedback'
          }, text(error))
        ])
      ]),
      h('hr', {}),
      error ? null : views[view](params)
    ])
  },
  node: document.body
}))

