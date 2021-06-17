import {html} from '../lib.js'
import {nav} from '../index.js'

const img = "https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-logo.svg"

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
          label: "home",
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
                  href: '#futbol'
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
              <span class="navbar-brand">Basic</span>
              <span class="navbar-text">home</span>
              <button
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item dropdown">
                    <span
                      class="dropdown-toggle nav-link"
                      data-bs-toggle="dropdown"
                      style="cursor: pointer;"
                    ><i class="fas fa-running"></i> Sports</span>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="#volleyball"
                        ><i class="fas fa-volleyball-ball"></i> Volleyball</a>
                      </li><li>
                        <a
                          class="dropdown-item"
                          href="#basketball"
                        ><i class="fas fa-basketball-ball"></i> Basketball</a>
                      </li><li>
                        <a
                          class="dropdown-item"
                          href="#futbol"
                        ><i class="fas fa-futbol"></i> Futbol</a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#profile"
                    ><i class="fas fa-user"></i> Profile</a>
                  </li>
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#logout"
                    ><i class="fas fa-power-off"></i> Quit</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        `),
        "basic"
      ], [
        {
          title: "With image",
          label: "home",
          image: img,
          imageHeight: "24",
          items: [
            {
              title: 'Profile',
              icon: 'user',
              href: '#profile'
            }
          ]
        },
        html(`
          <nav 
            class="navbar navbar-light bg-light"
          >
            <div class="container-fluid">
              <a
                class="navbar-brand"
              ><img
                src="${img}"
                alt="With image"
                title="With image"
                height="24"
              /></a>
              <span class="navbar-text">home</span>
              <button
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#profile"
                    ><i class="fas fa-user"></i> Profile</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        `),
        "With image"
      ], [
        {
          title: "With image and href",
          label: "home",
          home: '#home',
          image: img,
          imageHeight: "24",
          items: [
            {
              title: 'Profile',
              icon: 'user',
              href: '#profile'
            }
          ]
        },
        html(`
          <nav 
            class="navbar navbar-light bg-light"
          >
            <div class="container-fluid">
              <a
                class="navbar-brand"
                href="#home"
              ><img
                src="${img}"
                alt="With image and href"
                title="With image and href"
                height="24"
              /></a>
              <span class="navbar-text">home</span>
              <button
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#profile"
                    ><i class="fas fa-user"></i> Profile</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        `),
        "With image and href"
      ], [
        {
          title: "Fancy",
          label: "home",
          home: '#fancy',
          fixed: 'top',
          whiteText: true,
          type: 'dark',
          expand: 'lg',
          items: [
            {
              title: 'Profile',
              icon: 'user',
              href: '#profile'
            }
          ]
        },
        html(`
          <nav 
            class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark"
          >
            <div class="container-fluid">
              <a
                class="navbar-brand"
                href="#fancy"
              >Fancy</a>
              <span class="navbar-text">home</span>
              <button
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target=".navbar-collapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                    <a
                      class="nav-link"
                      href="#profile"
                    ><i class="fas fa-user"></i> Profile</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        `),
        "fancy"
      ]
    ]
  ]
]
