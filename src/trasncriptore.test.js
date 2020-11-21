import Transcriptore from './transcriptore.js'

const TEST_FILE_URL = 'https://gist.githubusercontent.com/joaopaulovieira/87f92a1fd3139ed1c811aad0dfcfc011/raw/5ff2e2cee4f54a824f9d8a57a558d14d27d60aec/dash_sample.mpd'

describe('Transcriptore', () => {
  test('readBuffer method returns text parsed from a stream', done => {
    fetch(TEST_FILE_URL).then(response => {
      response.buffer().then( item => {
        const text = new Transcriptore().readBuffer({ value: item })
        const comparison = text.indexOf('<?xml version=\"1.0\" encoding=\"utf-8\"?>') !== -1

        expect(comparison).toBeTruthy()
        done()
      })
    })
  })

  test('fetchAndParse method fetches one external file and returns a parsed text from response.body stream', done => {
    new Transcriptore().fetchAndParse(TEST_FILE_URL).then(text => {
      const comparison = text.indexOf('<?xml version=\"1.0\" encoding=\"utf-8\"?>') !== -1
      expect(comparison).toBeTruthy()
      done()
    })
  })
})