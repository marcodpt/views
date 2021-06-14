import {h, text} from 'https://unpkg.com/hyperapp'
import {spinner} from './icon.js'
import link from './link.js'
import field from './field.js'

export default ({
  type,
  message,
  Fields,
  rawType,
  src,
  Actions,
  title,
  model,
  pending,
  back,
  submit,
  blur
}) =>
  h('div', {
    class: [
      'modal-dialog',
      'modal-'+((Fields && Fields.length) || rawType ? 'lg' : 'sm')
    ].join("\n")
  }, [
    h('div', {
      class: 'modal-content'
    }, [
      title == null ? null : h('div', {
        class: 'modal-header'
      }, [
        h('h5', {
          class: 'modal-title'
        }, text(title)),
        !back ? null : link({
          type: 'light',
          float: 'right',
          icon: 'times',
          click: back
        })
      ]),
      h('div', {
        class: 'modal-body'
      }, [
        !Fields || !Fields.length ? null : h('form', {
          onsubmit: (state, ev) => {
            ev.preventDefault()
            ev.stopPropagation()
          }
        }, Fields.map(function (f) {
          return h('div', {
            class: 'row my-3'
          }, [
            !f.title ? null : h('div', {
              class: 'col-'+(submit ? 'md-' : '')+'3'
            }, [
              h('label', {
                class: 'form-label'
              }, text(f.title))
            ]),
            h('div', {
              class: 'col-'+(submit ? 'md-' : '')+(f.title ? 9 : 12)
            }, [
              field({
                ...f,
                value: submit ? model[f.name] : f.value
              }),
              !f.error ? null : h('div', {
                class: 'invalid-feedback'
              }, text(f.error))
            ])
          ])
        })),
        !message ? null : h('div', {
          class: [
            'alert',
            'alert-'+(type || 'danger'),
            'text-left'
          ].join(" "),
          style: 'white-space: pre-wrap;'
        }, text(message)),
        rawType == 'image' ? h('img', {
          class: 'w-100',
          src: src
        }) : rawType == 'audio' ? h('audio', {
          class: 'w-100',
          controls: true
        }, [
          h('source', {
            src: src,
            type: mime 
          })
        ]) : rawType == 'video' ? h('video', {
          class: 'w-100',
          controls: true
        }, [
          h('source', {
            src: src,
            type: mime
          })
        ]) : rawType != null ? h('span', {
          style: 'white-space: pre-wrap; word-break: break-all;'
        }, text(src)) : null,
        message || (Fields && Fields.length) || src ? null : h('div', {
          class: 'text-center'
        }, spinner({size: '5x'}))
      ]),
      (!Actions || !Actions.length) &&
        typeof submit != 'function' && back == null ? null :
      h('div', {
        class: 'modal-footer'
      }, [
        !back ? null : link({
          click: back,
          title: L.close,
          type: 'secondary',
          icon: 'times'
        })
      ].concat((Actions || []).map(function (action) {
        return link(action)
      })).concat([
        typeof submit != 'function' ? null : link({
          type: blur ? 'danger' : 'primary',
          icon: blur ? 'exclamation' : 'check',
          click: blur ? null : submit,
          blur: blur,
          title: L.submit,
          pending: pending
        })
      ]))
    ])
  ])
