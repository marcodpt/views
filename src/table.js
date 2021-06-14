import {h, text} from 'https://unpkg.com/hyperapp'

export default ({
  title,
  description,
  back,
  Actions,
  page,
  pages,
  limit,
  filter,

  RowActions,
  Fields,
  Rows,
  Totals,
  check,
  pager,
  sort,
  download,
  pending,
  tab,
  operators,
  values,
  F,
  group,
  Groups,
  G,
  search,
  getTitle,
  getValues,
  refresh,
  Count
}, update) =>
  h('table', {
    class: [
      "table",
      "table-striped",
      "table-bordered",
      "table-hover",
      "table-center"
    ].join("\n")
  }, [
    h('thead', {}, [
      !title ? null : h('tr', {}, [
        h('th', {
          class: 'align-middle text-center',
          colspan: '100%'
        }, text(title))
      ]),
      !description ? null : h('tr', {}, [
        h('th', {
          class: 'align-middle',
          style: 'white-space: pre-wrap;',
          colspan: '100%'
        }, text(description))
      ]),
      !back && (!Actions || !Actions.length) ? null : h('tr', {}, [
        h('th', {
          class: 'align-middle text-center',
          colspan: '100%'
        }, [link({
          ...T.back,
          click: typeof back == 'function' ? back : () => {history.back()}
        })].concat(Actions.map(action => link(action))))
      ]),
      !(page && pages) ? null : h('tr', {}, [
        h('th', {
          class: 'align-middle text-center',
          colspan: '100%'
        }, inline([
          link({
            ...T.rr,
            click: page() <= 1 ? null : () => page(1)
          }),
          link({
            ...T.r,
            click: page() <= 1 ? null : () => page(page() - 1)
          }),
          field({
            name: 'page',
            options: T.page(pages),
            change: ev => page(ev.target.value),
            value: page()
          }),
          !limit ? null : field({
            name: 'limit',
            options: T.limit(limit()),
            change: ev => limit(ev.target.value),
            value: limit()
          }),
          link({
            ...T.f,
            click: page() >= pages ? null : () => page(page() + 1)
          }),
          link({
            ...T.ff,
            click: page() >= pages ? null : () => page(pages)
          })
        ]))
      ]),
      !download && !filter && !group && !search ? null : h('tr', {}, [
        h('th', {
          class: 'align-middle text-center',
          colspan: '100%'
        }, [
          h('div', {
            class: "input-group"
          }, [
            !search ? null : link({
              ...T.clear,
              click: () => search('')
            }),
            !search ? null : field({
              ...T.search,
              name: 'search',
              change: ev => search(ev.target.value),
              value: search()
            }),
            !filter ? null : link({
              ...T.filter,
              close: undefined,
              click: (state) => ({
                ...state,
                tab: 'filter'
              })
            }),
            !filter || !filter().length ? null : link({
              type: 'info',
              dropdown: true
            }),
            !filter || !filter().length ? null : h('ul', {
              class: 'dropdown-menu'
            }, filter().map(f => 
              h('li', {}, [
                link({
                  item: true,
                  click: f.click,
                  icon: T.filter.close,
                  title: f.title
                })
              ])
            )),
            !group || !group().length ? null : link({
              T.ungroup,
              click: group('')
            }),
            !group || group().length ? null : link({
              T.group,
              click: state => ({
                ...state,
                tab: 'group'
              })
            }),
            !download ? null : link({
              ...T.csv,
              click: state => [{
                ...state,
                pending: true
              }, [dispatch => {
                const csv = (
                  Data, Fields, skipHeader, separator, newline
                ) => {
                  newline = newline || "\n"
                  separator = separator || "\t"
                  Fields = Fields && typeof Fields == "object" ? Fields :
                    (Data && Data[0] ? Object.keys(Data[0]) : [])

                  var Labels = Fields
                  if (!(Fields instanceof Array)) {
                    Labels = Object.values(Fields)
                    Fields = Object.keys(Fields)
                  }

                  var data = ""

                  if (!skipHeader) {
                    data += Labels.join(separator)+newline
                  }

                  data += Data.map(function (row) {
                    return Fields.map(function (field) {
                      return String(row[field])
                    }).join(separator)
                  }).join(newline)

                  return data
                }

                const src = function (data, mime, encoding) {
                  return 'data:'+(mime || 'text/plain')+";"
                    +(encoding || 'charset=utf-8')+','
                    +encodeURIComponent(data || '')
                }

                const getFile = (data, name, mime, encoding) => {
                  var link = document.createElement('a')
                  link.setAttribute('href', src(data, mime, encoding))
                  link.setAttribute('download', name || 'data.txt')
                  document.body.appendChild(link)
                  link.click()
                  link.parentNode.removeChild(link)
                }
                download('data').then(res => {
                  getFile(csv(
                    res.data, Fields.reduce((F, X) => {
                      F[X.name] = X.title 
                      return F
                    }, {})
                  ), download('name'))
                  dispatch(state => ({
                    ...state,
                    pending: false
                  }))
                })
              }]]
            })
          ]),
          !filter || tab != 'filter' ? null : h('div', {
            class: "mt-2"
          }, [
            inline([
              link({
                type: 'secondary',
                icon: 'times',
                click: state => ({
                  ...state,
                  tab: ''
                })
              }),
              field({
                name: 'field',
                change: (state, ev) => ({
                  ...state,
                  F: {
                    ...state.F,
                    field: ev.target.value,
                    value: null
                  }
                }),
                options: Fields.map(({name, title}) => ({
                  id: clear(name),
                  id_: title
                })),
                value: F.field 
              }),
              field({
                name: 'operator',
                change: (state, ev) => ({
                  ...state,
                  F: {
                    ...state.F,
                    operator: ev.target.value,
                    value: null
                  }
                }),
                options: Object.keys(operators).reduce((O, key) => {
                  O.push({
                    id: key,
                    id_: operators[key].title
                  })
                  return O
                }, []),
                value: F.operator
              }),
              field({
                name: 'value',
                change: (state, ev) => ({
                  ...state,
                  F: {
                    ...state.F,
                    value: ev.target.value
                  }
                }),
                options: operators[F.operator].strict ?
                  getValues(F.field) : undefined,
                value: F.value
              }),
              link({
                ...T.filter,
                close: null,
                click: F.value == null ? null : (state, ev) => {
                  filter(state.F)
                  return {
                    ...state,
                    tab: '',
                    filter: null
                  }
                }
              })
            ])
          ]),
          !group || tab != 'group' ? null : h('div', {
            class: "mt-2"
          }, [
            inline([
              link({
                type: 'secondary',
                icon: 'times',
                click: state => ({
                  ...state,
                  tab: ''
                })
              }),
              field({
                name: 'field',
                options: Fields.map(f => ({
                  id: f.name,
                  id_: f.title
                })),
                change: (state, ev) => {
                  state.Groups = state.Groups || []
                  const v = ev.target.value
                  const i = state.Groups.indexOf(v)
                  if (i == -1) {
                    state.Groups.push(v)
                  } else {
                    state.Groups.splice(i, 1)
                  }
                  return state
                },
                placeholder: 'Adicionar Coluna...'
              }),
              link({
                ...T.group,
                click: Groups && Groups.length ? (state, ev) => {
                  group(state.Groups)
                  state.tab = ''
                  state.Groups = []
                  return state
                } : null,
                title: T.group.title+': '+(!Groups || !Groups.length ?
                  '' : (': '+Groups.map(
                    key => getTitle(Fields, key)
                  ).join(', '))
                )
              })
            ])
          ])
        ])
      ]),
      !Totals ? null : h('tr', {}, (!check || G ? [] : [
        h('td', {
          class: 'align-middle text-center'
        })
      ]).concat(RowActions.map(() => G ? null : h('td', {
        class: 'align-middle text-center'
      }))).concat(Fields.map(({name}) =>
        isG(G, Totals, name) ? null : h('td', {
          class: 'align-middle text-center'
        }, text(Totals[name] || ''))
      ))),
      h('tr', {}, (!check || G ? [] : [
        h('td', {
          class: 'align-middle text-center'
        }, [
          link({
            ...T.check,
            size: 'sm',
            click: !Rows ? null : check(null, true)
          })
        ])
      ]).concat(G ? null : RowActions.map(action => 
        h('th', {
          class: 'align-middle text-center'
        }, [
          link({
            ...action,
            compact: true,
            size: action.multiple ? 'sm' : null,
            click: action.multiple,
            type: action.multiple ? action.type : null,
            href: null
          })
        ])
      )).concat(Fields.map(({name, title}) => 
        isG(G, Totals, name) ? null : h('th', {
          class: 'align-middle text-center'
        }, link({
          icon: sort ? sort(name, true) : '',
          title: title,
          click: sort ? refresh(sort(name), 'Rows') : null,
          reverse: sort(name, true).substr(0, 4) == 'sort'
        }))
      )))
    ]),
    h('tbody', {}, 
      !Rows ? h('tr', {}, [
        h('td', {
          class: 'align-middle text-center',
          colspan: '100%'
        }, [
          spinner({size: '5x'})
        ])
      ]) : Rows.map(row => h('tr', {}, (!check || G ? [] : [
        h('td', {
          class: 'align-middle text-center'
        }, [
          input({
            name: 'id',
            type: 'checkbox',
            onclick: check(row.id, true),
            checked: check(row.id)
          })
        ])
      ]).concat(G ? null : RowActions.map(a => {
        return h('td', {
          class: 'align-middle text-center'
        }, [
          link({
            ...a,
            size: 'sm',
            compact: true,
            href: a.href ? render(a.href, row) : null
          })
        ])
      })).concat(Fields.map(f => {
        const value = String(row[f.name] == null ? '' : row[f.name])
        return isG(G, Totals, f.name) ? null : h('td', {
          class: 'align-middle text-'+
            (value.indexOf('\n') != -1 ? 'left' : 'center')
        }, [
          field({
            ...f,
            name: f.readOnly === false ? f.name : null,
            href: f.href && !G ? render(f.href, row) : null,
            value: value
          })
        ])
      }))))
    )
  ])