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

## News
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
    } {
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
  },
  {
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