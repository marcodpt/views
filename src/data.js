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
  close
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
    data = !data.trim().length && href ? '_' : data
    const P = {
      style: {
        whiteSpace: 'pre-wrap',
        wordBreak: mime ? 'break-all' : null
      },
      href: name ? src : (href || null)
    }
    if (title) {
      P.title = title
    }
    if (src && name) {
      P.download = name
    }
    const el = h(href || name ? 'a' : 'span', P, text(name ? title : data))

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
