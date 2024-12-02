const DOM = {
  $author: document.getElementById('author'),
  $quote: document.getElementById('quote'),
  $tags: document.getElementById('tags'),
  $generate: document.getElementById('generate'),
  $copy: document.getElementById('copy')
}

export default function setElements (quote) {
  const { content, author, tags } = quote
  const { length } = tags

  DOM.$quote.innerHTML = `"${content}"`
  DOM.$author.innerHTML = author

  DOM.$tags.innerHTML = ''

  for (let i = 0; i < length; i++) {
    const $tag = document.createElement('span')
    $tag.classList.add('px-3', 'py-[1px]', 'text-xs', 'text-purpleUI', 'border-[1px]', 'border-purpleUI', 'rounded-full')
    $tag.innerHTML = tags[i]
    DOM.$tags.appendChild($tag)
  }
}