import {html} from '../lib.js'
import {table} from '../index.js'

const back = state => {
  return [state, [() => alert("back")]]
}

const click = state => {
  return [state, [() => alert("click")]]
}

export default [
  [
    "table",
    (params) => table()(params),
    [
      [
        {},
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
            </thead>
          </table>
        `),
        "no params"
      ], [
        {
          title: "sample table"
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >sample table</th>
              </tr>
            </thead>
          </table>
        `),
        "title"
      ], [
        {
          description: [
            "Hello world!",
            "This is my table, and this table have a description support! :)",
            "This is a long text test for see how it fits in the layout!",
            "Hope you enjoy!"
          ].join('\n')
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >
                  <div
                    class="m-auto text-left"
                    style="max-width: 300px;"
                  >
                    <div
                      class="alert alert-info"
                      role="alert"
                    >
                      <span style="white-space: pre-wrap;">${[
                        "Hello world!",
                        "This is my table, and this table have a description support! :)",
                        "This is a long text test for see how it fits in the layout!",
                        "Hope you enjoy!"
                      ].join('\n')}</span>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        `),
        "description"
      ], [
        {
          back: back
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >
                  <div
                    class="row gx-1 justify-content-center"
                  >
                    <div class="col-auto">
                      <button
                        class="btn btn-secondary"
                      ><i class="fas fa-arrow-left"></i>Back</button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        `),
        "back"
      ], [
        {
          Actions: [
            {
              type: "success",
              href: "#insert",
              icon: "pencil-alt",
              title: "Insert"
            }, {
              type: "warning",
              href: "#edit",
              icon: "edit",
              title: "Update"
            }, {
              type: "danger",
              href: "#remove",
              icon: "trash",
              title: "Remove"
            }
          ]
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >
                  <div
                    class="row gx-1 justify-content-center"
                  >
                    <div class="col-auto">
                      <a
                        class="btn btn-success"
                        href="#insert"
                      ><i class="fas fa-pencil-alt"></i> Insert</a>
                    </div>
                    <div class="col-auto">
                      <a
                        class="btn btn-warning"
                        href="#edit"
                      ><i class="fas fa-edit"></i> Update</a>
                    </div>
                    <div class="col-auto">
                      <a
                        class="btn btn-danger"
                        href="#remove"
                      ><i class="fas fa-trash"></i> Remove</a>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        `),
        "Actions"
      ], [
        {
          page: (action) => {
            if (action == 'rr') {
              return null
            } else if (action == 'r') {
              return null
            } else if (action == 'f') {
              return state => {
                alert('f')
                return state
              }
            } else if (action == 'ff') {
              return state => {
                alert('ff')
                return state
              }
            } else if (action == 'options') {
              const p = 4
              const R = []
              for (i = 1; i <= p; i++) {
                R.push({value: i, label: `Page ${i} of ${p}`})
              }
              return R
            } else if (action == 'change') {
              return (state, ev) => {
                alert(`page: ${ev.target.value}`)
                return state
              }
            } else if (action == 'page') {
              return 1
            } else if (action == 'limiters') {
              return null
            } else if (action == 'limiter') {
              return null
            } else if (action == 'limit') {
              return null
            }
          }
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >
                  <div
                    class="row gx-1 justify-content-center"
                  >
                    <div class="col-auto">
                      <button
                        class="btn btn-secondary disabled"
                      ><i class="fas fa-fast-backward"></i></button>
                    </div>
                    <div class="col-auto">
                      <button
                        class="btn btn-secondary disabled"
                      ><i class="fas fa-step-backward"></i></button>
                    </div>
                    <div class="col-auto">
                      <select class="form-control">
                        <option
                          value="1"
                          label="Page 1 of 4"
                        ></option>
                        <option
                          value="2"
                          label="Page 2 of 4"
                        ></option>
                        <option
                          value="3"
                          label="Page 3 of 4"
                        ></option>
                        <option
                          value="4"
                          label="Page 4 of 4"
                        ></option>
                      </select>
                    </div>
                    <div class="col-auto">
                      <button
                        class="btn btn-secondary"
                      ><i class="fas fa-step-forward"></i></button>
                    </div>
                    <div class="col-auto">
                      <button
                        class="btn btn-secondary"
                      ><i class="fas fa-fast-forward"></i></button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        `),
        "Pager without limiter"
      ], [
        {
          page: (action) => {
            if (action == 'rr') {
              return state => {
                alert('r')
                return state
              }
            } else if (action == 'r') {
              return state => {
                alert('rr')
                return state
              }
            } else if (action == 'f') {
              return state => {
                alert('f')
                return state
              }
            } else if (action == 'ff') {
              return state => {
                alert('ff')
                return state
              }
            } else if (action == 'options') {
              const p = 4
              const R = []
              for (i = 1; i <= p; i++) {
                R.push({value: i, label: `Page ${i} of ${p}`})
              }
              return R
            } else if (action == 'change') {
              return (state, ev) => {
                alert(`page: ${ev.target.value}`)
                return state
              }
            } else if (action == 'page') {
              return 3
            } else if (action == 'limiters') {
              const L = [5, 10, 25, 50, 100]
              const R = []
              for (i = 0; i < L.length; i++) {
                R.push({value: L[i], label: `${L[i]} items per page`})
              }
              return R
            } else if (action == 'limiter') {
              return (state, ev) => {
                alert(`limit: ${ev.target.value}`)
                return state
              }
            } else if (action == 'limit') {
              return 10
            }
          }
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >
                  <div
                    class="row gx-1 justify-content-center"
                  >
                    <div class="col-auto">
                      <button
                        class="btn btn-secondary disabled"
                      ><i class="fas fa-fast-backward"></i></button>
                    </div>
                    <div class="col-auto">
                      <button
                        class="btn btn-secondary disabled"
                      ><i class="fas fa-step-backward"></i></button>
                    </div>
                    <div class="col-auto">
                      <select class="form-control">
                        <option
                          value="1"
                          label="Page 1 of 4"
                        ></option>
                        <option
                          value="2"
                          label="Page 2 of 4"
                        ></option>
                        <option
                          value="3"
                          label="Page 3 of 4"
                        ></option>
                        <option
                          value="4"
                          label="Page 4 of 4"
                        ></option>
                      </select>
                    </div>
                    <div class="col-auto">
                      <select class="form-control">
                        <option
                          value="5"
                          label="5 items per page"
                        ></option>
                        <option
                          value="10"
                          label="10 items per page"
                        ></option>
                        <option
                          value="25"
                          label="25 items per page"
                        ></option>
                        <option
                          value="50"
                          label="50 items per page"
                        ></option>
                        <option
                          value="100"
                          label="100 items per page"
                        ></option>
                      </select>
                    </div>
                    <div class="col-auto">
                      <button
                        class="btn btn-secondary"
                      ><i class="fas fa-step-forward"></i></button>
                    </div>
                    <div class="col-auto">
                      <button
                        class="btn btn-secondary"
                      ><i class="fas fa-fast-forward"></i></button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        `),
        "Pager"
      ], [
        {
          search: (action) => {
            if (action == 'clear') {
              return state => {
                alert('clear')
                return state
              }
            } else if (action == 'change') {
              return state => {
                alert('change')
                return state
              }
            } else if (action == 'value') {
              return state => {
                alert('value')
                return state
              }
            }
          }
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >
                  <div class="input-group">
                    <button
                      class="btn btn-secondary"
                    ><i class="fas fa-times"></i></button>
                    <input
                      class="form-control"
                      placeholder="Search"
                    />
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        `),
        "Search"
      ], [
        {
          filter: action => {
            if (action == 'open') {
              return state => {
                alert('open')
                return state
              }
            } else if (action == 'active') {
              return false
            } else if (action == 'items') {
              return []
            } else if (action == 'close') {
              return null
            } else if (action == 'onfield') {
              return null
            } else if (action == 'fields') {
              return null
            } else if (action == 'field') {
              return null
            } else if (action == 'onoperator') {
              return null
            } else if (action == 'operators') {
              return null
            } else if (action == 'operator') {
              return null
            } else if (action == 'onvalue') {
              return null
            } else if (action == 'values') {
              return null
            } else if (action == 'value') {
              return null
            } else if (action == 'run') {
              return null
            }
          }
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >
                  <div class="input-group">
                    <button
                      class="btn btn-info"
                    ><i class="fas fa-filter"></i> Filter</button>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        `),
        "Filter"
      ], [
        {
          filter: action => {
            if (action == 'open') {
              return state => {
                alert('open')
                return state
              }
            } else if (action == 'active') {
              return true
            } else if (action == 'items') {
              return [
                {
                  title: 'First filter',
                  click: state => {
                    alert('First')
                    return state
                  }
                }, {
                  title: 'Second filter',
                  click: state => {
                    alert('Second')
                    return state
                  }
                }
              ]
            } else if (action == 'close') {
              return null
            } else if (action == 'onfield') {
              return null
            } else if (action == 'fields') {
              return null
            } else if (action == 'field') {
              return null
            } else if (action == 'onoperator') {
              return null
            } else if (action == 'operators') {
              return null
            } else if (action == 'operator') {
              return null
            } else if (action == 'onvalue') {
              return null
            } else if (action == 'values') {
              return null
            } else if (action == 'value') {
              return null
            } else if (action == 'run') {
              return null
            }
          }
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >
                  <div class="input-group">
                    <button
                      class="btn btn-info"
                    ><i class="fas fa-filter"></i> Filter</button>
                    <a
                      class="btn btn-info dropdown-toggle"
                      data-bs-toggle="dropdown"
                      style="cursor: pointer;"
                    ></a>
                    <ul class="dropdown-menu">
                      <li>
                        <a
                          class="dropdown-item"
                        ><i class="fas fa-times"></i> First filter</a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                        ><i class="fas fa-times"></i> Second filter</a>
                      </li>
                    </ul>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        `),
        "Filter Active"
      ], [
        {
          filter: action => {
            if (action == 'open') {
              return null
            } else if (action == 'active') {
              return null
            } else if (action == 'items') {
              return null
            } else if (action == 'close') {
              return state => {
                alert('close')
                return state
              }
            } else if (action == 'onfield') {
              return (state, ev) => {
                alert('field: '+ev.target.value)
                return state
              }
            } else if (action == 'fields') {
              return ['id', 'created', 'name']
            } else if (action == 'field') {
              return ''
            } else if (action == 'onoperator') {
              return (state, ev) => {
                alert('operator: '+ev.target.value)
                return state
              }
            } else if (action == 'operators') {
              return ['equal', 'not equal', 'contains']
            } else if (action == 'operator') {
              return 'equal'
            } else if (action == 'onvalue') {
              return (state, ev) => {
                alert('value: '+ev.target.value)
                return state
              }
            } else if (action == 'values') {
              return ['x', 'y', 'z']
            } else if (action == 'value') {
              return ''
            } else if (action == 'run') {
              return state => {
                alert('run')
                return state
              }
            }
          },
          tab: 'filter'
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >
                  <div
                    class="row gx-1 justify-content-center"
                  >
                    <div class="col-auto">
                      <button
                        class="btn btn-secondary"
                      ><i class="fas fa-times"></i></button>
                    </div>
                    <div class="col-auto">
                      <select class="form-control">
                        <option
                          value="id"
                          label="id"
                        ></option>
                        <option
                          value="created"
                          label="created"
                        ></option>
                        <option
                          value="name"
                          label="name"
                        ></option>
                      </select>
                    </div>
                    <div class="col-auto">
                      <select class="form-control">
                        <option
                          value="equal"
                          label="equal"
                        ></option>
                        <option
                          value="not equal"
                          label="not equal"
                        ></option>
                        <option
                          value="contains"
                          label="contains"
                        ></option>
                      </select>
                    </div>
                    <div class="col-auto">
                      <select class="form-control">
                        <option
                          value="x"
                          label="x"
                        ></option>
                        <option
                          value="y"
                          label="y"
                        ></option>
                        <option
                          value="z"
                          label="z"
                        ></option>
                      </select>
                    </div>
                    <div class="col-auto">
                      <button
                        class="btn btn-info"
                      ><i class="fas fa-filter"></i> Filter</button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        `),
        "Filter Tab"
      ], [
        {
          group: action => {
            if (action == 'current') {
              return ''
            } else if (action == 'open') {
              return state => {
                alert('open')
                return state
              }
            } else if (action == 'clear') {
              return null
            } else if (action == 'close') {
              return null
            } else if (action == 'fields') {
              return null
            } else if (action == 'change') {
              return null
            } else if (action == 'run') {
              return null
            }
          }
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >
                  <div class="input-group">
                    <button
                      class="btn btn-warning"
                    ><i class="fas fa-th"></i> Group</button>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        `),
        "Group"
      ], [
        {
          group: action => {
            if (action == 'current') {
              return ': name'
            } else if (action == 'open') {
              return null
            } else if (action == 'clear') {
              return state => {
                alert('clear')
                return state
              }
            } else if (action == 'close') {
              return null
            } else if (action == 'fields') {
              return null
            } else if (action == 'change') {
              return null
            } else if (action == 'run') {
              return null
            }
          }
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >
                  <div class="input-group">
                    <button
                      class="btn btn-warning"
                    ><i class="fas fa-times"></i> Ungroup</button>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        `),
        "Group active"
      ], [
        {
          group: action => {
            if (action == 'current') {
              return ': name'
            } else if (action == 'open') {
              return null
            } else if (action == 'clear') {
              return null
            } else if (action == 'close') {
              return state => {
                alert('close')
                return state
              }
            } else if (action == 'fields') {
              return ['id', 'created', 'name']
            } else if (action == 'change') {
              return (state, ev) => {
                alert('change: '+ev.target.value)
                return state
              }
            } else if (action == 'run') {
              return state => {
                alert('run')
                return state
              }
            }
          },
          tab: 'group'
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >
                  <div
                    class="row gx-1 justify-content-center"
                  >
                    <div class="col-auto">
                      <button
                        class="btn btn-secondary"
                      ><i class="fas fa-times"></i></button>
                    </div>
                    <div class="col-auto">
                      <select class="form-control">
                        <option
                          value="id"
                          label="id"
                        ></option>
                        <option
                          value="created"
                          label="created"
                        ></option>
                        <option
                          value="name"
                          label="name"
                        ></option>
                      </select>
                    </div>
                    <div class="col-auto">
                      <button
                        class="btn btn-warning"
                      ><i class="fas fa-th"></i> Group</button>
                    </div>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        `),
        "Group tab"
      ], [
        {
          download: action => {
            if (action == 'run') {
              return state => {
                alert('download')
                return state
              }
            } else if (action == 'pending') {
              return false
            }
          }
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >
                  <div class="input-group">
                    <button
                      class="btn btn-secondary"
                    ><i class="fas fa-file-csv"></i> Download</button>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        `),
        "Download"
      ], [
        {
          download: action => {
            if (action == 'run') {
              return state => {
                alert('download')
                return state
              }
            } else if (action == 'pending') {
              return true
            }
          }
        },
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
              <tr>
                <th
                  class="align-middle text-center"
                  colspan="100%"
                >
                  <div class="input-group">
                    <button
                      class="btn btn-secondary disabled"
                    ><i class="fas fa-spinner fa-spin"></i> Download</button>
                  </div>
                </th>
              </tr>
            </thead>
          </table>
        `),
        "Download pending"
      ]
    ]
  ]
]
