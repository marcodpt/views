import {h, text} from 'https://unpkg.com/hyperapp'

export default ({
  data,
  mime,
  name,
  href,
  encoding,
  title,
  src
}) => {
  const type = mime ? mime.split('/').shift() : ''
  data = data == null ? '' : String(data)
  if (!src && data) {
    src = 'data:'+(mime || 'text/plain')+";"+
      (encoding || 'charset=utf-8')+','+encodeURIComponent(data || '')
  }

  if (type == 'image' && src) {
    const img = h('img', {
      class: 'w-100',
      src: src,
      alt: title || null,
      title: title || null
    })
    return href ? h('a', {
      href: href
    }, img) : img
  } else if (type == 'video' && src) {
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
  } else if (type == 'audio' && src) {
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
    return h(href || name ? 'a' : 'span', P, text(name ? title : data))
  }
}
