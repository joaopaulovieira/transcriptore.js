export default class Transcriptore {
  readBuffer(buffer) {
    return new TextDecoder().decode(buffer.value, { stream: !buffer.done })
  }
}
