import {h, text} from 'https://unpkg.com/hyperapp'
import field from './field.js'

export default ({
  title,
  info,
  change,
  results
}) =>
  h('div', {
    class: 'container mt-5'
  }, [
    !title ? null : h('h1', {}, text(title)),
    !info ? null : h('p', {
      class: 'lead'
    }, text(info)),
    h('hr', {}),
    h('div', {
      class: 'container my-3'
    }, [
      field({
        type: 'file',
        multiple: true,
        change: change
      })
    ]),
    h('div', {
      class: 'container'
    }, results.map(({type, name, message, click}, i) => 
      h('div', {
        class: `alert alert-${type} alert-dismissible fade show`
      }, [
        text(`${name}: ${message}`),
        h('button', {
          type: 'button',
          class: 'btn-close',
          onclick: click
        })
      ])
    ))
  ])
