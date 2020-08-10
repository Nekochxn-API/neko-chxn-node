[![npm](https://img.shields.io/npm/v/neko-chxn.svg)](https://www.npmjs.com/package/neko-chxn)
[![npm](https://img.shields.io/npm/dt/neko-chxn.svg?maxAge=3600)](https://www.npmjs.com/package/neko-chxn)
[![install size](https://packagephobia.now.sh/badge?p=neko-chxn)](https://packagephobia.now.sh/result?p=neko-chxn)

[![NPM](https://nodei.co/npm/neko-chxn.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/neko-chxn/)

# Neko-chxn

This is the official [neko-chxn.xyz](https://neko-chxn.xyz/) nodejs wrapper. It is written in typescript, so all endpoints and responses are fully typed. <br><br>
All endpoints return `Promise<{ url: theUrl}>`. [You will need to handle this promise accordingly.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)

## Usage

```js
const neko = require('neko-chxn');

neko.blush().then(result => console.log(result));
// Output: { "url": "https://api.neko-chxn.xyz/v1/blush/output/blush_002.gif" }
```

### Current Endpoints

| Endpoint | Rating | Description      |
| -------- | ------ | ---------------- |
| blush    | SFW    | Get a blush gif  |
| cry      | SFW    | Get a crying gif |
| cuddle   | SFW    | Get a cuddle gif |
| dance    | SFW    | Get a dance gif  |
| hug      | SFW    | Get a hug gif    |
| kick     | SFW    | Get a kick gif   |
| kiss     | SFW    | Get a kiss gif   |
| love     | SFW    | Get a love gif   |
| pat      | SFW    | Get a pat gif    |
| punch    | SFW    | Get a punch gif  |
| smirk    | SFW    | Get a smirk gif  |
| tickle   | SFW    | Get a tickle gif |
| yell     | SFW    | Get a yell gif   |
