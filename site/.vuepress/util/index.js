import marked from 'marked'

export function markdown (input) {
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
