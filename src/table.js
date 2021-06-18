import {h, text} from '../lib.js'
import {spinner} from './icon.js'
import translate from '../lang/index.js'

const sm = l =>
  link({
    ...l,
    size: 'sm',
    title: l.icon ? null : l.title,
    type: click === undefined ? null : l.type
  })

const cell = ({
  head,
  left,
  full
}, content) => 
  h(head ? 'th' : 'td', {
    class: [
      'align-middle',
      left ? null : 'text-center'
    ],
    colspan: full ? '100%' : null
  })

const base = ({Heads, Rows, Cols}) => 
  h('table', {
    class: [
      "table",
      "table-striped",
      "table-bordered",
      "table-hover",
      "table-center"
    ]
  }, [
    h('thead', {}, Heads.filter(h => h != null).map(({
      content,
      type
    }) => 
      h('tr', {}, [
        ([
          'inline',
          'raw'
        ]).indexOf(type) != -1 ? cell({
          head: true,
          full: true
        }, [
          type == 'inline' ? h('div', {
            class: 'row gx-1 justify-content-center'
          }, content.map(data => {
            return h('div', {
              class: 'col-auto'
            }, data)
          })) : content
        ]) : !Cols ? null : Cols.map(c => c && c(content, type))
      ])
    )),
    !Cols || !Cols.filter(c => c).length ? null : h('tbody', {}, 
      !Rows ? h('tr', {}, [
        cell({
          full: true
        }, spinner({size: '5x'}))
      ]) : Rows.map(row => h('tr', {}, Cols.map(c => c && c(row))))
    )
  ])

export default (language) => {
  const t = translate('table', language)

  return ({
    title,
    description,
    back,
    Actions,
    Links,
    Fields,
    check,
    sort,
    page,
    filter,
    group,
    search,
    download,
    tab,
    Rows
  }) => base({
    Heads: [
      !title ? null : {
        type: 'raw',
        content: text(title)
      },
      !description ? null : {
        type: 'raw',
        content: h('div', {
          class: [
            'm-auto',
            'text-left'
          ],
          style: {
            maxWidth: '300px'
          }
        }, data({
          data: description,
          type: 'info'
        }))
      },
      !back && !Actions ? null : {
        type: 'inline',
        content: [!back ? null : link({
          type: 'secondary',
          icon: 'arrow-left',
          title: '',
          click: back
        })].concat([] || Actions).map(action => link(action))
      },
      !page ? null : {
        type: 'inline',
        content: [
          link({
            type: 'secondary',
            icon: 'fast-backward',
            click: page('rr')
          }),
          link({
            type: 'secondary',
            icon: 'step-backward',
            click: page('r')
          }),
          field({
            options: page('options'),
            change: page('change'),
            value: page('page')
          }),
          !page('limiters') ? null : field({
            options: page('limiters'),
            change: page('limiter'),
            value: page('limit')
          }),
          link({
            type: 'secondary',
            icon: 'step-forward',
            click: page('f')
          }),
          link({
            type: 'secondary',
            icon: 'fast-forward',
            click: page('ff')
          })
        ]
      },
      tab == 'filter' || tab == 'group' || !(
        download || filter || group || search
      ) ? null : {
        type: 'raw',
        content: h('div', {
          class: "input-group"
        }, [
          !search ? null : link({
            icon: 'times',
            type: 'secondary',
            click: search('clear')
          }),
          !search ? null : field({
            change: search('change'),
            value: search('value')
          }),
          !filter ? null : link({
            icon: 'filter',
            type: 'info',
            title: t('filter'),
            click: filter('open')
          }),
          !filter || !filter('active') ? null : link({
            type: 'info',
            dropdown: true
          }),
          !filter || !filter('active') ? null : h('ul', {
            class: 'dropdown-menu'
          }, filter('items').map(f => 
            h('li', {}, [
              link({
                ...f,
                icon: 'times',
                cls: 'dropdown-item'
              })
            ])
          )),
          !group || !group('current') ? null : link({
            icon: 'times',
            type: 'warning',
            title: t('ungroup'),
            click: group('clear')
          }),
          !group || group('current') ? null : link({
            icon: 'th',
            type: 'warning',
            title: t('group'),
            click: group('open')
          }),
          !download ? null : link({
            icon: 'file-csv',
            type: 'secondary',
            title: t('download'),
            click: download('run'),
            pending: download('pending')
          })
        ])
      },
      !filter || tab != 'filter' ? null : {
        type: 'inline',
        content: [
          link({
            type: 'secondary',
            icon: 'times',
            click: filter('close')
          }),
          field({
            change: filter('onfield'),
            options: filter('fields'),
            value:  filter('field')
          }),
          field({
            change: filter('onoperator'),
            options: filter('operators'),
            value: filter('operator')
          }),
          field({
            change: filter('onvalue'),
            options: filter('values'),
            value: filter('value')
          }),
          link({
            icon: 'filter',
            type: 'info',
            title: t('filter'),
            click: filter('run')
          })
        ]
      },
      !group || tab != 'group' ? null : {
        type: 'inline',
        content: [
          link({
            type: 'secondary',
            icon: 'times',
            click: group('close')
          }),
          field({
            options: group('fields'),
            change: group('change')
          }),
          link({
            icon: 'th',
            type: 'warning',
            title: t('group')+group('current'),
            click: group('run')
          })
        ]
      }
    ],
    Cols: [
      !check ? null : (row, type) => 
      type == 'totals' ? cell({}) :
      row == null ? cell({
        head: true
      }, link({
        type: 'success',
        icon: 'check',
        size: 'sm',
        click: check(null, true)
      })) : cell({}, field({
        type: 'checkbox',
        checked: check(row.id),
        click: check(row.id, true)
      }))
    ].concat((Links || []).map(l => (row, type) => 
      type == 'totals' ? cell({}) :
      row == null ? cell({
        head: true
      }, sm(l())) : cell({}, sm(l(row)))
    )).concat((Fields || []).map(f => row => {
      const X = f(row)
      if (row == null) {
        return cell({
          head: true
        }, link({
          click: sort ? sort(X.name, true) : null,
          title: X.title,
          after: sort ? sort(X.name) : null
        }))
      } else {
        return cell({
          left: X.data.indexOf('\n') != -1
        }, data(X))
      }
    })),
    Rows
  })
}
