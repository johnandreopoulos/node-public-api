# Available APIs
This is a list of available APIs that can be used to get data from the web.

- [Available APIs](#available-apis)
- [Requirements](#requirements)
  - [Random Quote Generator](#random-quote-generator)
  - [Latest World News based on Google News](#latest-world-news-based-on-google-news)
  - [Spotify Daily Trendings (200 Songs)](#spotify-daily-trendings-200-songs)
  - [Live Cryptocurrency Prices (50 Top Coins)](#live-cryptocurrency-prices-50-top-coins)
 
![image](https://github.com/johnandreopoulos/Public-APIs/assets/39243722/a8377707-affa-44fe-8d69-0da12c02c850)

  
The following APIs are available for use. Each API returns a list of objects with the data requested. The data is returned in JSON format.

# Requirements
- Install Node.js [Node.js](https://nodejs.org/en/download/)
  
The following packages are used to get the data from the web:
- [undici](https://www.npmjs.com/package/undici)
- [cheerio](https://www.npmjs.com/package/cheerio)

Windows installation `npm install`

Linux installation `sudo npm install`

---

## Random Quote Generator
It returns a random quote from a list of quotes.
- Address URL Used: https://best-quotations.com/tyxaio.php
```js
[
    {
      quote: 'Is that a gun in your pocket, or are you just glad to see me?',
      author: 'Mae West, 1893-1980, American actress'
    }
]
```

## Latest World News based on Google News
It returns a list of news articles based on google news.
- Address URL Used: https://news.google.com/home?hl=en-US&gl=US&ceid=US:en
```js
[
    {
      title: 'Israel-Gaza war: US calls for temporary ceasefire in UN text',
      source: 'BBC.com',
      time: '1 hour ago',
      author: '',
      link: 'https://news.google.com/./articles/    CBMiMWh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy93b3JsZC11cy1jYW5hZGEtNjgzNDYwMjfSATVodH  RwczovL3d3dy5iYmMuY29tL25ld3Mvd29ybGQtdXMtY2FuYWRhLTY4MzQ2MDI3LmFtcA?hl=en-US&    gl=US&ceid=US%3Aen'
    }, {
      title: 'Gaza cease-fire, Minnesota shooting, Colorado shooting, Julian    Assange, California rain, Biden: Daily Briefing',
      source: 'USA TODAY',
      time: '55 minutes ago',
      author: 'Nicole FallertBy Nicole Fallert',
      link: 'https://news.google.com/./articles/    CBMic2h0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9uZXdzLzIwMjQvMDIvMjAvaXNyYWVsLW  hhbWFzLWNlYXNlLWZpcmUtc2hvb3RpbmctZ3VuLWNhbGlmb3JuaWEtd2VhdGhlci83MjY2Nzg5MTAw    Ny_SAQA?hl=en-US&gl=US&ceid=US%3Aen'
    }, { MORE HERE }
]
```

## Spotify Daily Trendings (200 Songs)
It returns a list of 200 songs trending on Spotify.
- Address URL Used: https://kworb.net/spotify/country/global_daily.html 
```js
[
  {
    artist: 'Benson Boone',
    track: 'Beautiful Things',
    streams: '5,056,620',
    streamsPlus: '-375,698',
    sevenDay: '38,108,850',
    sevenDayPlus: '+573,214',
    totalStreams: '129,370,578'
  }, {
    artist: 'Taylor Swift',
    track: 'Cruel Summer',
    streams: '4,520,317',
    streamsPlus: '-421,229',
    sevenDay: '32,322,647',
    sevenDayPlus: '+249,426',
    totalStreams: '1,313,238,641'
  }, { MORE HERE }
]
```

## Live Cryptocurrency Prices (50 Top Coins)
It returns a list of 50 top cryptocurrencies and their prices.
- Address URL Used: https://www.livecoinwatch.com/
```js
[
  {
    sort: '1',
    name: 'BTC Bitcoin',
    price: '$52338.87',
    marketCap: '$1.0276 T',
    volume: '$19.65 B',
    liquidity: '$19.65 B',
    allTimeHigh: '$68780.77'
  }, {
    sort: '2',
    name: 'ETH Ethereum',
    price: '$2970.47',
    marketCap: '$351.53 B',
    volume: '$18.57 B',
    liquidity: '$18.57 B',
    allTimeHigh: '$4861.29'
  }, { MORE HERE }
]
```
