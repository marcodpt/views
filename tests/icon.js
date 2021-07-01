import {fas, spinner} from '../index.js'

export default [
  [
    "fas",
    (h, text) => fas,
    [
      [
        {},
        ``,
        "no params"
      ], [
        {name: 'icons'},
        `<i
          class="fas fa-icons"
        ></i>`,
        "icons"
      ], [
        {
          name: 'user',
          size: '3x'
        }, 
        `<i
          class="fas fa-user fa-3x"
        ></i>`,
        "big user"
      ], [
        {
          name: 'spinner',
          spin: true
        },
        `<i
          class="fas fa-spinner fa-spin"
        ></i>`,
        "spinner"
      ], [
        {
          name: 'spinner',
          spin: true,
          size: '5x'
        },
        `<i
          class="fas fa-spinner fa-spin fa-5x"
        ></i>`,
        "huge spinner"
      ]
    ]
  ], [
    "spinner",
    (h, text) => spinner,
    [
      [
        {},
        `<i
          class="fas fa-spinner fa-spin"
        ></i>`,
        "no params"
      ], [
        {
          size: '5x'
        },
        `<i
          class="fas fa-spinner fa-spin fa-5x"
        ></i>`,
        "huge"
      ]
    ]
  ]
]
