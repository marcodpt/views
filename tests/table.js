import {html} from '../lib.js'
import {table} from '../index.js'

const back = state => {
  return [state, [() => alert("back")]]
}

const submit = state => {
  return [state, [() => alert("submit")]]
}

const blur = state => {
  return [state, [() => alert("blur")]]
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
        {},
        html(`
          <table
            class="table table-striped table-bordered table-hover table-center"
          >
            <thead>
            </thead>
          </table>
        `),
        "title"
      ]
    ]
  ]
]
