import {fas, spinner} from './src/icon.js'
import data from './src/data.js'
import link from './src/link.js'
import field from './src/field.js'
import form from './src/form.js'
import table from './src/table.js'
import nav from './src/nav.js'

const f = form()
const f_pt = form('pt')

const t = table()
const t_pt = table('pt')

export {
  fas,
  spinner,
  data,
  link,
  field,
  f as form,
  f_pt as form_pt,
  t as table,
  t_pt as table_pt,
  nav
}
