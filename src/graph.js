import {h, text} from 'https://unpkg.com/hyperapp'

export default () => 
  h('div', {
    class: 'w-100 position-absolute start-0 top-0 bottom-0 mt-5'
  }, [
    h('div', {
      class: 'p-5 h-100'
    }, [
      h('div', {
        class: 'card mb-3 h-100'
      }, [
        h('div', {
          class: 'row no-gutters h-100'
        }, [
          h('div', {
            class: 'col-lg-4 border-right'
          }, [
            h('div', {
              'data-ctx': 'app'
            })
          ]),
          h('div', {
            class: 'col-lg-8'
          }, [
            h('div', {
              'data-ctx': 'graph',
              class: 'h-100'
            })
          ])
        ])
      ])
    ])
  ])
