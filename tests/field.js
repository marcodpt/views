import {field} from '../index.js'

const showVal = (state, ev) => {
  return [state, [() => alert(ev.target.value)]]
}

const showFiles = (state, ev) => {
  const F = ev.target.files
  const M = ['Files selected: ']
  for (var i = 0; i < F.length; i++) {
    M.push(F[i].name)
  }
  const msg = M.join('\n')
  return [state, [() => alert(msg)]]
}

const showCheck = (state, ev) => {
  const e = ev.target
  return [state, [
    () => alert('You '+(e.checked ? '' : 'un')+'check me: '+e.value)
  ]]
}

export default [
  [
    "field",
    (h, text) => field,
    [
      [
        {},
        `<input
          class="form-control"
          type="text"
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
          value="testing"
          name="test"
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
          value="testing"
          name="test"
          disabled/>`,
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
          value="2021-07-15"
          name="test"
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
          value="2021-07-15"
          name="test"
          disabled/>`,
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
          disabled/>`,
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
          multiple/>`,
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
          multiple/>`,
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
          multiple/>`,
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
          step="0.1"
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
          value="2.7"
          name="test"
          step="0.1"
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
          value="2.7"
          name="test"
          disabled
          step="0.1"
        />`,
        "disabled number input"
      ], [
        {
          name: "test",
          type: "range",
          step: 1,
          min: 3,
          max: 12,
          placeholder: "..."
        },
        `<input
          class="form-control"
          type="range"
          name="test"
          placeholder="..."
          step="1"
          min="3"
          max="12"
        />`,
        "range input"
      ], [
        {
          name: "test",
          type: "range",
          step: 1,
          min: 3,
          max: 12,
          value: 9,
          onchange: showVal,
          placeholder: "",
          error: ''
        },
        `<input
          class="form-control is-valid"
          type="range"
          value="9"
          name="test"
          placeholder=""
          step="1"
          min="3"
          max="12"
        />`,
        "changeable range input"
      ], [
        {
          name: "test",
          type: "range",
          step: 1,
          min: 3,
          max: 12,
          value: 9,
          onchange: showVal,
          placeholder: "",
          disabled: true,
          error: 'y'
        },
        `<input
          class="form-control is-invalid"
          type="range"
          value="9"
          name="test"
          placeholder=""
          disabled
          step="1"
          min="3"
          max="12"
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
          name="test"
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
          checked/>`,
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
          disabled
          checked/>`,
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
          name="test"
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
          checked/>`,
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
          disabled
          checked/>`,
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
          value="#000000"
          name="test"
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
          value="#000000"
          name="test"
          disabled/>`,
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
        ></textarea>`,
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
          value="Hello,\nmy name is Mario!"
        ></textarea>`,
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
          value="Hello,\nmy name is Mario!"
        ></textarea>`,
        "disabled textarea"
      ], [
        {
          name: "test",
          options: ['car', 'bike', 'plane']
        },
        `<select
          class="form-control"
          name="test"
          value=""
        ><option
          value="car"
          label="car"
        ></option><option
          value="bike"
          label="bike"
        ></option><option
          value="plane"
          label="plane"
        ></option><option
          value=""
          selected
          disabled>\u2304</option></select>`,
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
          value=""
        ><option
          value=""
          selected
          disabled>\u231B</option></select>`,
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
          value="plane"
        ><option
          value="plane"
          selected
          disabled>\u231B</option></select>`,
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
          value="3"
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
          value="3"
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
          value="3"
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
