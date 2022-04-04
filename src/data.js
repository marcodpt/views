import {h, text} from '../lib.js'
import link from './link.js'

export default ({
  data,
  mime,
  name,
  href,
  encoding,
  type,
  title,
  src,
  close,
  format
}) => {
  const M = mime ? mime.split('/').shift() : ''
  data = data == null ? '' : String(data)
  if (!src && data) {
    src = 'data:'+(mime || 'text/plain')+";"+
      (encoding || 'charset=utf-8')+','+encodeURIComponent(data || '')
  }

  if (M == 'image' && src) {
    const img = h('img', {
      class: 'w-100',
      src: src,
      alt: title || null,
      title: title || null
    })
    return href ? h('a', {
      href: href
    }, img) : img
  } else if (M == 'video' && src) {
    return h('video', {
      class: 'w-100',
      controls: true,
      title: title || null
    }, [
      h('source', {
        src: src,
        type: mime
      })
    ])
  } else if (M == 'audio' && src) {
    return h('audio', {
      class: 'w-100',
      controls: true,
      title: title || null
    }, [
      h('source', {
        src: src,
        type: mime 
      })
    ])
  } else {
    if (
      format == "date" &&
      typeof data == "string" &&
      /^\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/.test(data)
    ) {
      data = new Date(data).toLocaleDateString()
    }

    data = !data.trim().length && href ? '_' : data
    const el = h(href || name ? 'a' : 'span', {
      href: name ? src : (href || null),
      title: title,
      download: src && name ? name : null,
      style: {
        whiteSpace: 'pre-wrap',
        wordBreak: mime ? 'break-all' : null
      }
    }, name ? (!title ? null : text(title)) : (!data ? null : text(data)))

    return !type ? el : h('div', {
      class: [
        'alert',
        'alert-'+type,
        !close ? null : 'alert-dismissible'
      ],
      role: 'alert'
    }, [
      el,
      !close ? null : link({
        type: 'close',
        click: close
      }) 
    ])
  }
}
