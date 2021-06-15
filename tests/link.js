import {h, text} from 'https://unpkg.com/hyperapp'
import {link} from '../index.js'

const modal = msg => state => {
  alert(msg)
  return state
}

export default [
  [
    "link",
    (params) => link(params),
    [
      [
        {},
        `<span/>`,
        "no params"
      ], [
        {
          title: "test"
        },
        `<span>test</span>`,
        "simple title"
      ], [
        {
          title: "test",
          click: modal('test')
        },
        `<span style="cursor: pointer;">test</span>`,
        "simple clickable"
      ], [
        {
          type: "primary"
        },
        `<button class="btn btn-primary disabled"/>`,
        "empty button"
      ], [
        {
          type: "primary",
          title: "No action"
        },
        `<button class="btn btn-primary disabled">No action</button>`,
        "disabled button"
      ], [
        {
          type: "primary",
          title: "Say hello!",
          click: modal("Hello!")
        },
        `<button class="btn btn-primary">Say hello!</button>`,
        "Hello button"
      ], [
        {
          type: "primary",
          title: "Say hello",
          click: modal("Hello!"),
          after: 'exclamation'
        },
        `<button
          class="btn btn-primary"
        >Say hello <i class="fas fa-exclamation"/></button>`,
        "Hello button exclamation"
      ], [
        {
          type: "primary",
          title: "Say hello",
          click: modal("Hello!"),
          icon: 'exclamation',
          after: 'exclamation'
        },
        `<button
          class="btn btn-primary"
        ><i
          class="fas fa-exclamation"
        ></i> Say hello <i
          class="fas fa-exclamation"
        ></i></button>`,
        "Hello button double exclamation"
      ], [
        {
          type: "primary",
          title: "Say hello",
          click: modal("Hello!"),
          icon: 'exclamation',
          after: 'exclamation',
          size: 'sm'
        },
        `<button
          class="btn btn-primary btn-sm"
        ><i
          class="fas fa-exclamation"
        ></i> Say hello <i
          class="fas fa-exclamation"
        ></i></button>`,
        "small Hello button double exclamation"
      ], [
        {
          href: "#link"
        },
        `<a href="#link">_</a>`,
        "empty link"
      ], [
        {
          href: "#link",
          icon: 'times'
        },
        `<a href="#link"><i class="fas fa-times"/></a>`,
        "close link"
      ], [
        {
          href: "#link",
          icon: 'times',
          cls: 'float-right'
        },
        `<a
          class="float-right"
          href="#link"
        ><i class="fas fa-times"/></a>`,
        "close link on right"
      ], [
        {
          dropdown: true,
          title: 'dropdown'
        },
        `<span
          class="dropdown-toggle"
          data-bs-toggle="dropdown"
          style="cursor: pointer;"
        >dropdown</span>`,
        "dropdown"
      ], [
        {
          dropdown: true,
          title: 'dropdown',
          type: 'secondary'
        },
        `<button
          class="btn btn-secondary dropdown-toggle"
          data-bs-toggle="dropdown"
        >dropdown</button>`,
        "dropdown button"
      ], [
        {
          pending: true,
          title: 'pending',
          type: 'secondary',
          icon: 'check'
        },
        `<button
          class="btn btn-secondary disabled"
        ><i class="fas fa-spinner fa-spin"></i> pending</button>`,
        "pending button"
      ], [
        {
          pending: true,
          title: 'pending',
          type: 'secondary',
          icon: 'check',
          click: modal('click'),
          blur: modal('blur')
        },
        `<button
          class="btn btn-secondary disabled"
        ><i class="fas fa-spinner fa-spin"></i> pending</button>`,
        "pending button prevent blur and click"
      ], [
        {
          title: 'Blur',
          type: 'info',
          icon: 'check',
          blur: modal('blur')
        },
        `<button
          class="btn btn-info disabled"
        ><i class="fas fa-check"></i> Blur</button>`,
        "blur"
      ], [
        {
          title: 'Click me!',
          type: 'info',
          icon: 'check',
          click: modal('You did it!')
        },
        `<button
          class="btn btn-info"
        ><i class="fas fa-check"></i> Click me!</button>`,
        "click"
      ]
    ]
  ]
]
