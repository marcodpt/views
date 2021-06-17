import {h, text} from 'https://unpkg.com/hyperapp'
import link from './link.js'

export default ({
  whiteText,
  fixed,
  expand,
  type,
  home,
  image,
  imageHeight,
  title,
  current,
  items
}) =>
  h('nav', {
    class: [
      'navbar',
      fixed ? 'fixed-'+fixed : '',
      !expand ? '' :
        'navbar-expand'+(typeof expand == 'string' ? '-'+expand : ''),
      'navbar-'+(whiteText ? 'dark' : 'light'),
      'bg-'+(type || 'light')
    ]
  }, [
    h('div', {
      class: 'container-fluid'
    }, [
      !image ? null : h('a', {
        class: 'navbar-brand',
        href: home
      }, [
        h('img', {
          src: image,
          alt: title,
          title: title,
          height: imageHeight,
        })
      ]),
      image || !title ? null : link({
        title: title,
        href: home,
        cls: 'navbar-brand'
      }),
      !current ? null : link({
        title: current,
        cls: 'navbar-text'
      }),
      h('button', {
        class: 'navbar-toggler',
        'data-bs-toggle': 'collapse',
        'data-bs-target': '.navbar-collapse'
      }, [
        h('span', {
          class: 'navbar-toggler-icon'
        })
      ]),
      h('div', {
        class: 'collapse navbar-collapse'
      }, [
        h('ul', {
          class: 'navbar-nav ms-auto'
        }, (items || []).map(item =>
          item.items ? !item.items.length ? null : h('li', {
            class: 'nav-item dropdown'
          }, [
            link({
              ...item,
              dropdown: true,
              cls: 'nav-link'
            }),
            h('ul', {
              class: 'dropdown-menu'
            }, item.items.map(function (item) {
              return h('li', {}, [
                link({
                  ...item,
                  cls: 'dropdown-item'
                })
              ])
            }))
          ]) : h('li', {
            class: 'nav-item'
          }, [
            link({
              ...item,
              cls: 'nav-link'
            })
          ])
        ))
      ])
    ])
  ])
