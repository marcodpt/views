import {h, text} from 'https://unpkg.com/hyperapp'
import {field} from '../index.js'

const alerter = msg => (state, ev) => {
  return [state, [
    (d, e) => alert(msg(ev.target))
  ]]
}

const showVal = alerter(e => e.value)

const showFiles = alerter(e => {
  const M = ['Files selected: ']
  for (var i = 0; i < e.files.length; i++) {
    M.push(e.files[i].name)
  }
  return M.join('\n')
})

const showCheck = alerter(
  e => 'You '+(e.checked ? '' : 'un')+'check me: '+e.value
)

export default [
  [
    "field",
    (params) => field(params),
    [
      [
        {},
        `<input
          class="form-control"
          type="text"
          name=""
          placeholder=""
        />`,
        "no params"
      ], [
        {
          name: "test",
          placeholder: "..."
        },
        `<input
          class="form-control"
          type="text"
          name="test"
          placeholder="..."
        />`,
        "text input"
      ], [
        {
          name: "test",
          value: "testing",
          change: showVal,
          error: ''
        },
        `<input
          class="form-control is-valid"
          type="text"
          name="test"
          placeholder=""
        />`,
        "changeable text input"
      ], [
        {
          name: "test",
          value: "testing",
          change: showVal,
          disabled: true,
          error: 'y'
        },
        `<input
          class="form-control is-invalid"
          type="text"
          name="test"
          placeholder=""
          disabled
        />`,
        "disabled text input"
      ], [
        {
          name: "test",
          type: "date",
          placeholder: "..."
        },
        `<input
          class="form-control"
          type="date"
          name="test"
          placeholder="..."
        />`,
        "date input"
      ], [
        {
          name: "test",
          type: "date",
          value: "2021-07-15",
          change: showVal,
          error: ''
        },
        `<input
          class="form-control is-valid"
          type="date"
          name="test"
          placeholder=""
        />`,
        "changeable date input"
      ], [
        {
          name: "test",
          type: "date",
          value: "2021-07-15",
          change: showVal,
          disabled: true,
          error: 'y'
        },
        `<input
          class="form-control is-invalid"
          type="date"
          name="test"
          placeholder=""
          disabled
        />`,
        "disabled date input"
      ], [
        {
          name: "test",
          type: "file",
          placeholder: "..."
        },
        `<input
          class="form-control"
          type="file"
          name="test"
          placeholder="..."
        />`,
        "file input"
      ], [
        {
          name: "test",
          type: "file",
          placeholder: "...",
          change: showFiles,
          error: ''
        },
        `<input
          class="form-control is-valid"
          type="file"
          name="test"
          placeholder="..."
        />`,
        "changeable file input"
      ], [
        {
          name: "test",
          type: "file",
          placeholder: "...",
          change: showFiles,
          disabled: true,
          error: 'y'
        },
        `<input
          class="form-control is-invalid"
          type="file"
          name="test"
          placeholder="..."
          disabled
        />`,
        "disabled file input"
      ], [
        {
          name: "test",
          type: "files",
          placeholder: "..."
        },
        `<input
          class="form-control"
          type="file"
          name="test"
          placeholder="..."
          multiple
        />`,
        "files input"
      ], [
        {
          name: "test",
          type: "files",
          placeholder: "...",
          change: showFiles,
          error: ''
        },
        `<input
          class="form-control is-valid"
          type="file"
          name="test"
          placeholder="..."
          multiple
        />`,
        "changeable files input"
      ], [
        {
          name: "test",
          type: "files",
          placeholder: "...",
          change: showFiles,
          disabled: true,
          error: 'y'
        },
        `<input
          class="form-control is-invalid"
          type="file"
          name="test"
          placeholder="..."
          disabled
          multiple
        />`,
        "disabled files input"
      ], [
        {
          name: "test",
          type: "number",
          step: 0.1,
          placeholder: "..."
        },
        `<input
          class="form-control"
          type="number"
          name="test"
          placeholder="..."
        />`,
        "number input"
      ], [
        {
          name: "test",
          type: "number",
          step: 0.1,
          value: 2.7,
          change: showVal,
          error: ''
        },
        `<input
          class="form-control is-valid"
          type="number"
          name="test"
          placeholder=""
        />`,
        "changeable number input"
      ], [
        {
          name: "test",
          type: "number",
          step: 0.1,
          value: 2.7,
          change: showVal,
          disabled: true,
          error: 'y'
        },
        `<input
          class="form-control is-invalid"
          type="number"
          name="test"
          placeholder=""
          disabled
        />`,
        "disabled number input"
      ], [
        {
          name: "test",
          type: "range",
          step: 1,
          placeholder: "..."
        },
        `<input
          class="form-control"
          type="range"
          name="test"
          placeholder="..."
        />`,
        "range input"
      ], [
        {
          name: "test",
          type: "range",
          step: 1,
          value: 9,
          onchange: showVal,
          placeholder: "",
          error: ''
        },
        `<input
          class="form-control is-valid"
          type="range"
          name="test"
          placeholder=""
        />`,
        "changeable range input"
      ], [
        {
          name: "test",
          type: "range",
          step: 1,
          value: 9,
          onchange: showVal,
          placeholder: "",
          disabled: true,
          error: 'y'
        },
        `<input
          class="form-control is-invalid"
          type="range"
          name="test"
          placeholder=""
          disabled
        />`,
        "disabled range input"
      ], [
        {
          name: "test",
          type: "checkbox",
          placeholder: "..."
        },
        `<input
          class="form-check-input"
          type="checkbox"
          value=""
          name="test"
          placeholder=""
        />`,
        "checkbox input"
      ], [
        {
          name: "test",
          type: "checkbox",
          value: "mario",
          change: showCheck,
          checked: true,
          error: ''
        },
        `<input
          class="form-check-input"
          type="checkbox"
          value="mario"
          name="test"
          placeholder=""
        />`,
        "checked changeable checkbox input"
      ], [
        {
          name: "test",
          type: "checkbox",
          value: "mario",
          change: showCheck,
          checked: true,
          disabled: true,
          error: 'y'
        },
        `<input
          class="form-check-input"
          type="checkbox"
          value="mario"
          name="test"
          placeholder=""
          disabled
        />`,
        "checked disabled checkbox input"
      ], [
        {
          name: "test",
          type: "radio",
          placeholder: "..."
        },
        `<input
          class="form-check-input"
          type="radio"
          value=""
          name="test"
          placeholder=""
        />`,
        "radio input"
      ], [
        {
          name: "test",
          type: "radio",
          value: "luigi",
          checked: true,
          change: showCheck,
          error: ''
        },
        `<input
          class="form-check-input"
          type="radio"
          value="luigi"
          name="test"
          placeholder=""
        />`,
        "checked changeable radio input"
      ], [
        {
          name: "test",
          type: "radio",
          value: "luigi",
          change: showCheck,
          checked: true,
          disabled: true,
          error: 'y'
        },
        `<input
          class="form-check-input"
          type="radio"
          value="luigi"
          name="test"
          placeholder=""
          disabled
        />`,
        "checked disabled radio input"
      ], [
        {
          name: "test",
          type: "color",
          placeholder: "..."
        },
        `<input
          class="form-control"
          type="color"
          name="test"
          placeholder="..."
        />`,
        "color input"
      ], [
        {
          name: "test",
          type: "color",
          value: "#000000",
          change: showVal,
          error: ''
        },
        `<input
          class="form-control is-valid"
          type="color"
          name="test"
          placeholder=""
        />`,
        "changeable color input"
      ], [
        {
          name: "test",
          type: "color",
          value: "#000000",
          change: showVal,
          disabled: true,
          error: 'y'
        },
        `<input
          class="form-control is-invalid"
          type="color"
          name="test"
          placeholder=""
          disabled
        />`,
        "disabled color input"
      ], [
        {
          name: "test",
          type: "textarea",
          placeholder: "..."
        },
        `<textarea
          class="form-control"
          name="test"
          placeholder="..."
          rows="6"
        />`,
        "textarea"
      ], [
        {
          name: "test",
          type: "textarea",
          placeholder: "",
          value: "Hello,\nmy name is Mario!",
          rows: 4,
          change: showVal,
          error: ''
        },
        `<textarea
          class="form-control is-valid"
          name="test"
          placeholder=""
          rows="4"
        />`,
        "changeable textarea"
      ], [
        {
          name: "test",
          type: "textarea",
          placeholder: "",
          value: "Hello,\nmy name is Mario!",
          rows: 4,
          change: showVal,
          disabled: true,
          error: 'y'
        },
        `<textarea
          class="form-control is-invalid"
          name="test"
          placeholder=""
          rows="4"
          disabled
        />`,
        "disabled textarea"
      ], [
        {
          name: "test",
          options: ['car', 'bike', 'plane']
        },
        `<select
          class="form-control"
          name="test"
        ><option
          value=""
          disabled
        >\u2304</option><option
          value="car"
          label="car"
        ></option><option
          value="bike"
          label="bike"
        ></option><option
          value="plane"
          label="plane"
        ></option></select>`,
        "simple select"
      ], [
        {
          name: "test",
          options: null
        },
        `<select
          class="form-control"
          name="test"
          disabled
        ><option
          value=""
          disabled
        >\u231B</option></select>`,
        "loading select"
      ], [
        {
          name: "test",
          options: null,
          value: 'plane'
        },
        `<select
          class="form-control"
          name="test"
          disabled
        ><option
          value="plane"
          disabled
        >\u231B</option></select>`,
        "loading select with value"
      ], [
        {
          name: "test",
          options: [
            {value: 1, label: 'car'}, 
            {id: 2, id_: 'bike'},
            {id: 3, label: 'plane'},
            {value: 4, id_: 'skate'}
          ],
          value: 3
        },
        `<select
          class="form-control"
          name="test"
        ><option
          value="1"
          label="car"
        ></option><option
          value="2"
          label="bike"
        ></option><option
          value="3"
          label="plane"
        ></option><option
          value="4"
          label="skate"
        ></option></select>`,
        "object select"
      ], [
        {
          name: "test",
          options: [
            {value: 1, label: 'car'}, 
            {id: 2, id_: 'bike'},
            {id: 3, label: 'plane'},
            {value: 4, id_: 'skate'}
          ],
          value: 3,
          change: showVal,
          error: ''
        },
        `<select
          class="form-control is-valid"
          name="test"
        ><option
          value="1"
          label="car"
        ></option><option
          value="2"
          label="bike"
        ></option><option
          value="3"
          label="plane"
        ></option><option
          value="4"
          label="skate"
        ></option></select>`,
        "changeble select"
      ], [
        {
          name: "test",
          options: [
            {value: 1, label: 'car'}, 
            {id: 2, id_: 'bike'},
            {id: 3, label: 'plane'},
            {value: 4, id_: 'skate'}
          ],
          value: 3,
          change: showVal,
          error: 'y',
          disabled: true
        },
        `<select
          class="form-control is-invalid"
          name="test"
          disabled
        ><option
          value="1"
          label="car"
        ></option><option
          value="2"
          label="bike"
        ></option><option
          value="3"
          label="plane"
        ></option><option
          value="4"
          label="skate"
        ></option></select>`,
        "disabled select"
      ]
    ]
  ]
]
