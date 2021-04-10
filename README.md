[![](https://data.jsdelivr.com/v1/package/npm/transcriptore.js/badge)](https://www.jsdelivr.com/package/npm/transcriptore.js)
[![](https://img.shields.io/npm/v/transcriptore.js.svg?style=flat-square)](https://npmjs.org/package/transcriptore.js)
[![](https://img.shields.io/npm/dt/transcriptore.js.svg?style=flat-square)](https://npmjs.org/package/transcriptore.js)
![](https://badgen.net/bundlephobia/min/transcriptore.js@1.0.1)
![Coveralls github](https://img.shields.io/coveralls/github/joaopaulovieira/transcriptore.js?style=flat-square)
![Travis (.com)](https://img.shields.io/travis/com/joaopaulovieira/transcriptore.js?style=flat-square)
[![](https://img.shields.io/github/license/joaopaulovieira/transcriptore.js?style=flat-square)](https://github.com/joaopaulovieira/transcriptore.js/blob/master/LICENSE)

<div align=center><img src="./public/transcriptore-ico.png" width="500px"></div>
<div align=center><p style="color: black; font-size: 50px">Transcriptore.js</p></div>

# How it works

This is our file example(`lorem_ipsum.txt`):
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

Now, we just need to:
* Read this file through a [ReadableStream](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream);
* Pass the [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) returned from the read method of the `ReadableStream`;
* Call the `readBuffer` method of our `Transcriptore` instance to get the parsed text.

For the sake of practicality, we can use the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API):

```javascript
import Transcriptore from 'transcriptore.js'

const parser = new Transcriptore()
fetch('https://example.com/path/lorem_ipsum.txt').then(reponse => {
  // response.body is a ReadableStream! See: https://developer.mozilla.org/en-US/docs/Web/API/Body/body
  const reader = response.body.getReader()
  reader.read().then(buffer => console.log(parser.readBuffer(buffer)))
})

// output: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

`Transcriptore.js` also have the `fetchAndParse` method to pass a URL and receives the parsed text file:

```javascript
import Transcriptore from 'transcriptore.js'

const parser = new Transcriptore()
// The method uses Fetch API so, it's possible to pass the fetch config options to too.
parser.fetchAndParse('https://example.com/path/lorem_ipsum.txt', { mode: 'cors' }).then(text => console.log(text))

// output: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

`Transcriptore.js` also work with Node.js:

```javascript
// parse_lorem_ipsum.js
import Transcriptore from 'transcriptore'
import fetch from 'node-fetch'

global.fetch = fetch
const transcriptore = new Transcriptore()

parser.fetchAndParse('https://example.com/path/lorem_ipsum.txt', { mode: 'cors' }).then(text => console.log(text))
```

Then:

```javascript
node parse_lorem_ipsum.txt

// output: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

# Demos

Check `public/index.html` for browser demo and `public/node_example.js` for Node.js demo.
 
# Development

* Run `npm i` to setup local environment;
* Run `npm run build` to generate dist files;
* Run `npm start` to run demo page (up on `localhost:8080`);
* Run `npm test` to check project tests;
* Run `npm run lint` to validate project lint rules;
