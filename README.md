# Public APIs (Scraper) - Use at Your Own Risk

This document provides a curated list of public APIs designed for extracting various types of data from the web. Please note that while these APIs are accessible for use, you should exercise caution and use them at your own risk.

## Table of Contents

- [Requirements](#requirements)
- [Example Data](#example-data)
  - [Random Quotes](#random-quotes)
  - [Latest World News from Google News](#latest-world-news-from-google-news)
  - [Spotify Daily Trending Songs (200 Tracks)](#spotify-daily-trending-songs-200-tracks)
  - [Live Cryptocurrency Prices (Top 50 Coins)](#live-cryptocurrency-prices-top-50-coins)
  - [Top 10 Netflix Movies](#top-10-netflix-movies)

![image](https://github.com/johnandreopoulos/Public-APIs/assets/39243722/5eb7180d-f9e1-41e5-833d-c999b81325fa)

## Requirements

- **Node.js**: Download and install from [Node.js](https://nodejs.org/en/download/)

Required packages:
- [undici](https://www.npmjs.com/package/undici)
- [cheerio](https://www.npmjs.com/package/cheerio)
- [express](https://www.npmjs.com/package/express)

Installation:
- On Windows: `npm install`
- On Linux: `sudo npm install`

---

## Example Data

### Random Quotes

Fetches a random quote from a curated list of quotations.

- **API URL**: [https://best-quotations.com/tyxaio.php](https://best-quotations.com/tyxaio.php)

**Example Response:**
```json
[
    {
      "quote": "Is that a gun in your pocket, or are you just glad to see me?",
      "author": "Mae West, 1893-1980, American actress"
    },
    {
      "quote": "Coming back to where you started is not the same as never leaving.",
      "author": "Terry Pratchett, 1948-2015, British writer"
    }
]
```

### Latest World News from Google News

Provides the latest news articles as reported by Google News.

- **API URL**: [https://news.google.com/home?hl=en-US&gl=US&ceid=US:en](https://news.google.com/home?hl=en-US&gl=US&ceid=US:en)

**Example Response:**
```json
[
    {
      "title": "Israel-Gaza war: US calls for temporary ceasefire in UN text",
      "source": "BBC.com",
      "time": "1 hour ago",
      "link": "https://news.google.com/./articles/CBMiMWh0dHBzOi8vd3d3LmJiYy5jb20vbmV3cy93b3JsZC11cy1jYW5hZGEtNjgzNDYwMjfSATVodH...ZlYWV0aGVyLzcyNjY3ODkxMTAwNy_SAQA?hl=en-US&gl=US&ceid=US%3Aen"
    },
    {
      "title": "Gaza cease-fire, Minnesota shooting, Colorado shooting, Julian Assange, California rain, Biden: Daily Briefing",
      "source": "USA TODAY",
      "time": "55 minutes ago",
      "author": "Nicole Fallert",
      "link": "https://news.google.com/./articles/CBMic2h0dHBzOi8vd3d3LnVzYXRvZGF5LmNvbS9zdG9yeS9uZXdzLzIwMjQvMDIvMjAvaXNyYWVsLWhhbWFzLWNlYXNlLWZpcmUtc2hvb3RpbmctZ3VuLWNhbGlmb3JuaWEtd2VhdGhlci83MjY2Nzg5MTAwNy_SAQA?hl=en-US&gl=US&ceid=US%3Aen"
    }
]
```

### Spotify Daily Trending Songs (200 Tracks)

Returns a list of the top 200 trending songs on Spotify.

- **API URL**: [https://kworb.net/spotify/country/global_daily.html](https://kworb.net/spotify/country/global_daily.html)

**Example Response:**
```json
[
  {
    "artist": "Benson Boone",
    "track": "Beautiful Things",
    "streams": "5,056,620",
    "streamsPlus": "-375,698",
    "sevenDay": "38,108,850",
    "sevenDayPlus": "+573,214",
    "totalStreams": "129,370,578"
  },
  {
    "artist": "Taylor Swift",
    "track": "Cruel Summer",
    "streams": "4,520,317",
    "streamsPlus": "-421,229",
    "sevenDay": "32,322,647",
    "sevenDayPlus": "+249,426",
    "totalStreams": "1,313,238,641"
  }
]
```

### Live Cryptocurrency Prices (Top 50 Coins)

Displays real-time prices for the top 50 cryptocurrencies.

- **API URL**: [https://www.livecoinwatch.com/](https://www.livecoinwatch.com/)

**Example Response:**
```json
[
  {
    "sort": "1",
    "name": "BTC Bitcoin",
    "price": "$52,338.87",
    "marketCap": "$1.0276 T",
    "volume": "$19.65 B",
    "liquidity": "$19.65 B",
    "allTimeHigh": "$68,780.77"
  },
  {
    "sort": "2",
    "name": "ETH Ethereum",
    "price": "$2,970.47",
    "marketCap": "$351.53 B",
    "volume": "$18.57 B",
    "liquidity": "$18.57 B",
    "allTimeHigh": "$4,861.29"
  }
]
```

### Top 10 Netflix Movies

Lists the top 10 movies currently trending on Netflix.

- **API URL**: [https://www.netflix.com/tudum/top10/](https://www.netflix.com/tudum/top10/)

**Example Response:**
```json
[
  {
    "rank": "1",
    "name": "Despicable Me 3",
    "weeksInTop10": "1",
    "hoursPlayed": "23,900,000",
    "runtime": "1:30",
    "views": "15,900,000"
  },
  {
    "rank": "2",
    "name": "Orion and the Dark",
    "weeksInTop10": "2",
    "hoursPlayed": "19,700,000",
    "runtime": "1:33",
    "views": "12,700,000"
  }
]
```

---

Feel free to explore and use these APIs to gather various types of data. Ensure to review their usage terms and conditions, and use them responsibly.
