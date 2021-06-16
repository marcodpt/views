import {h, text} from 'https://unpkg.com/hyperapp'
import {nav} from '../index.js'

const html = str => str.replace(/>[\s\r\n]*</g, "><").trim()

export default [
  [
    "nav",
    (params) => nav(params),
    [
      [
        {},
        html(`
          <nav 
            class="navbar navbar-light bg-light"
          >
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto"></ul>
              </div>
            </div>
          </nav>
        `),
        "no params"
      ], [
        {
          title: "Basic",
          current: "home",
          items: [
            {
              title: 'Sports',
              icon: 'running',
              items: [
                {
                  title: 'Volleyball',
                  icon: 'volleyball-ball',
                  href: '#volleyball'
                }, {
                  title: 'Basketball',
                  icon: 'basketball-ball',
                  href: '#basketball'
                }, {
                  title: 'Futbol',
                  icon: 'futbol',
                  href: '#futbal'
                }
              ]
            }, {
              title: 'Profile',
              icon: 'user',
              href: '#profile'
            }, {
              title: 'Quit',
              icon: 'power-off',
              href: '#logout'
            }
          ]
        },
        html(`
          <nav 
            class="navbar navbar-light bg-light"
          >
            <div class="container-fluid">
              <button
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto"></ul>
              </div>
            </div>
          </nav>
        `),
        "basic"
      ]
    ]
  ]
]
