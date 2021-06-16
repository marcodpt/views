import form from './form.js'
import table from './table.js'

export default (type, language) => key => {
  var L = {}
  const get = (X, language) => X[language] || X.en || {}
  if (type == 'form') {
    L = get(form, language)
  } else if (type == 'table') {
    L = get(table, language)
  }
  return L[key] || key
}
