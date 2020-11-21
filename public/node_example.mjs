import Transcriptore from './dist/transcriptore.modern.mjs'
import fetch from 'node-fetch'

global.fetch = fetch
const transcriptore = new Transcriptore()


transcriptore.fetchAndParse('https://gist.githubusercontent.com/joaopaulovieira/87f92a1fd3139ed1c811aad0dfcfc011/raw/5ff2e2cee4f54a824f9d8a57a558d14d27d60aec/dash_sample.mpd').then(text => console.log('dash_sample.mpd', text))