import {h, text} from '../lib.js'
import {spinner} from './icon.js'
import data from './data.js'
import link from './link.js'
import field from './field.js'
import translate from '../lang/index.js'

export default (language) => {
  const t = translate('form', language)

  return ({
    title,
    description,
    Fields,
    Data,
    Actions,
    model,
    pending,
    back,
    submit,
    blur
  }) => {
    const set = X => X == null ? [] : X instanceof Array ? X : [X] 
    Fields = set(Fields)
    Data = set(Data)
    const size = Fields.length || (Data.length && Data[0].mime) ? 'lg' : 'sm'
    if (!title && Data.length && !Fields.length) {
      title = Data[0].title
    }

    return h('div', {
      class: [
        'modal-dialog',
        'modal-'+size
      ]
    }, [
      h('div', {
        class: 'modal-content'
      }, [
        !title && !description ? null : h('div', {
          class: 'modal-header'
        }, [
          h('h5', {
            class: 'modal-title'
          }, text(title)),
          !back ? null : link({
            type: 'close',
            click: back
          })
        ]),
        h('div', {
          class: 'modal-body'
        }, [
          !description ? null : data({
            data: description
          })
        ].concat(
          !Fields.length || !model ? null : h('form', {
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
                submit ? field({
                  ...f,
                  value: model[f.name]
                }) : data({
                  data: model[f.name],
                  href: f.href
                }),
                !f.error || !submit ? null : h('div', {
                  class: 'invalid-feedback'
                }, text(f.error))
              ])
            ])
          }))
        ).concat(
          !Data.length ? null : Data.map(D => data(D))
        ).concat(
          Data.length || model ? null : h('div', {
            class: 'text-center'
          }, spinner({size: '5x'}))
        )),
        (!Actions || !Actions.length) &&
          typeof submit != 'function' && back == null ? null :
        h('div', {
          class: 'modal-footer'
        }, [
          !back ? null : link({
            click: back,
            title: t('close'),
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
            title: t('submit'),
            pending: pending
          })
        ]))
      ])
    ])
  }
}
