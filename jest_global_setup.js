import fetch from 'node-fetch'
import encoding from 'text-encoding'

window.TextDecoder = encoding.TextDecoder
window.fetch = fetch