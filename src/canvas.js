import {h, text} from 'https://unpkg.com/hyperapp'

export default () => 
  h('div', {
    class: 'w-100'
  }, [
    h('div', {
      class: 'p-5 h-100'
    }, [
      h('div', {
        class: 'card mb-3 h-100'
      }, [
        h('canvas', {
          class: 'h-100 w-100 m-auto'
        })
      ])
    ])
  ])
