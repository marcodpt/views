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
      image || !title ? null : h('a', {
        class: 'navbar-brand',
        href: home
      }, text(title)),
      !current ? null : h('span', {
        class: 'navbar-text'
      }, text(current)),
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
              nav: true,
              dropdown: true
            }),
            h('ul', {
              class: 'dropdown-menu'
            }, item.items.map(function (item) {
              return h('li', {
                class: 'nav-item'
              }, [
                link({
                  ...item,
                  item: true
                })
              ])
            }))
          ]) : link({
            ...item,
            nav: true
          })
        ))
      ])
    ])
  ])
