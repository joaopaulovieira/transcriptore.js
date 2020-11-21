export default class Transcriptore {
  readBuffer(buffer) {
    return new TextDecoder().decode(buffer.value, { stream: !buffer.done })
  }

  fetchAndParse(url, fetchOptions = {}) {
    return fetch(url, fetchOptions).then(response => {
      const stream = response.body.getReader && response.body.getReader().read() || response.buffer()
      return stream.then(buffer => this.readBuffer(buffer.value ? buffer : { value: buffer }))
    })
  }
}
