# views
> [Hyperapp](https://github.com/jorgebucaran/hyperapp) views with
[bootstrap5](https://getbootstrap.com/) and
[fontawesome5](https://fontawesome.com/)

[Tests](https://marcodpt.github.io/component/tests.html?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fmarcodpt%2Fviews%2Ftests.js)

This is my hyperapp views that I use in production. Have fun :)

## Usage
```js
import {
  fas,
  spinner,
  data,
  link,
  field
} from 'https://cdn.jsdelivr.net/gh/marcodpt/views/index.js'

fas({
  name: 'icons'
})
//<i class="fas fa-icons"></i>

fas({
  name: '@amazon',
  spin: true,
  size: '2x'
})
//<i class="fab fa-amazon fa-spin fa-2x"></i>

spinner({})
//<i class="fas fa-spinner fa-spin"></i>

spinner({
  size: '5x'
})
//<i class="fas fa-spinner fa-spin fa-5x"></i>

link({
  title: 'Insert',
  icon: 'pencil-alt'
})
//<span><i class="fas fa-pencil-alt"></i> Insert</span>

link({
  title: 'Insert',
  icon: 'pencil-alt',
  href: '#post'
})
//<a href="#post"><i class="fas fa-pencil-alt"></i> Insert</a>

link({
  title: 'Insert',
  type: 'success',
  icon: 'pencil-alt',
  href: '#post'
})
//<a class="btn btn-success" href="#post">
// <i class="fas fa-pencil-alt"></i> Insert
//</a>

data({
  data: "Hello world!"
})
//<span style="white-space:pre-wrap">Hello world!</span>

data({
  data: "Hello world!",
  type: "info"
})
//<div 
//  class="alert alert-info"
//  role="alert"
//>
//  <span style="white-space:pre-wrap">Hello world!</span>
//</div>

data({
  data: "Hello world!",
  href: "#hello",
  title: "msg"
})
//<a
//  href="#hello"
//  title="msg"
//  style="white-space:pre-wrap"
//>Hello world!</a>

data({
  data: "my data",
  href: "#hello",
  title: "Get your data!",
  mime: 'text/csv',
  name: "download.csv"
})
//<a
//  href="data:text/csv;charset=utf-8,my%20data"
//  title="Get your data!"
//  download="download.csv"
//  style="white-space:pre-wrap;word-break:break-all"
//>Get your data!</a>

data({
  title: "Girl in a jacket",
  mime: 'image/jpeg',
  src: "https://www.w3schools.com/tags/img_girl.jpg"
})
// <img
//  class="w-100"
//  src="https://www.w3schools.com/tags/img_girl.jpg"
//  alt="Girl in a jacket"
//  title="Girl in a jacket"
// />

field({}),
// <input class="form-control" type="text" />

field({
  name: "test",
  type: "date",
  value: "2021-07-15",
  change: showVal,
  disabled: true,
  error: 'y'
})
// <input
//  class="form-control is-invalid"
//  type="date"
//  value="2021-07-15"
//  name="test"
//  disabled
// />

field({
  name: "test",
  type: "textarea",
  placeholder: "",
  value: "Hello,\nmy name is Mario!",
  rows: 4,
  change: showVal,
  error: ''
})
//<textarea
//  class="form-control is-valid"
//  name="test"
//  placeholder=""
//  rows="4"
//  value="Hello,\nmy name is Mario!"
//></textarea>

field({
  name: "test",
  options: null
})
//<select class="form-control" name="test" disabled>
//  <option value="" selected disabled>\u231B</option>
//</select>

field({
  name: "test",
  options: ['car', 'bike', 'plane']
})
//<select class="form-control" name="test">
//  <option value="car" label="car"></option>
//  <option value="bike" label="bike"></option>
//  <option value="plane" label="plane"></option>
//  <option value="" selected disabled>\u2304</option>
//</select>

field({
  name: "test",
  options: [
    {value: 1, label: 'car'}, 
    {value: 2, label: 'bike'},
    {value: 3, label: 'plane'},
    {value: 4, label: 'skate'}
  ],
  value: 3
})
//<select class="form-control" name="test">
//  <option value="1" label="car"></option>
//  <option value="2" label="bike"></option>
//  <option value="3" label="plane" selected></option>
//  <option value="4" label="skate"></option>
//</select>
```

## Contributing
Yes please! It is a very simple project, no guidelines, any
contribution is greatly appreciated!
