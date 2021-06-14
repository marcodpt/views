import {fas, spinner} from '../index.js'

export default [
  [
    "fas",
    (params) => fas(params),
    [
      [
        {},
        ``,
        "no params"
      ], [
        {name: 'icons'},
        `<i
          class="fas fa-icons"
        />`,
        "icons"
      ], [
        {
          name: 'user',
          size: '3x'
        }, 
        `<i
          class="fas fa-user fa-3x"
        />`,
        "big user"
      ], [
        {
          name: 'spinner',
          spin: true
        },
        `<i
          class="fas fa-spinner fa-spin"
        />`,
        "spinner"
      ], [
        {
          name: 'spinner',
          spin: true,
          size: '5x'
        },
        `<i
          class="fas fa-spinner fa-spin fa-5x"
        />`,
        "huge spinner"
      ]
    ]
  ], [
    "spinner",
    (params) => spinner(params),
    [
      [
        {},
        `<i
          class="fas fa-spinner fa-spin"
        />`,
        "no params"
      ], [
        {
          size: '5x'
        },
        `<i
          class="fas fa-spinner fa-spin fa-5x"
        />`,
        "huge"
      ]
    ]
  ]
]
