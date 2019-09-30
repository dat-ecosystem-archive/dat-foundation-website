import marked from 'marked'

function markdown (input) {
  if (input === null) {
    return false
  } else {
    return marked(String(input), {
      smartypants: true,
      gfm: true,
      breaks: true
    })
  }
}
