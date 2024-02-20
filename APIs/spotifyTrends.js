const app = require('express').Router();
const { fetch } = require('undici');
const cheerio = require('cheerio');

const url = 'https://kworb.net/spotify/country/global_daily.html';

app.get('/spotifytrends', async (req, res) => {
  try {
    const response = await fetch(url).then(res => res.text());
    const $ = cheerio.load(response);

    const trends = [];
    let count = 1;
    $('tr').each((i, el) => {
      const artist = $(el).find('td.text.mp div a').eq(0).text();
      const track = $(el).find('td.text.mp div a').eq(1).text();
      const streams = $(el).find('td').eq(6).text();
      const streamsPlus = $(el).find('td').eq(7).text();
      const sevenDay = $(el).find('td').eq(8).text();
      const sevenDayPlus = $(el).find('td').eq(9).text();
      const totalStreams = $(el).find('td').eq(10).text();

      if (!artist) return;
      trends.push({ position: count++, artist, track, streams, streamsPlus, sevenDay, sevenDayPlus, totalStreams });
    });

    res.json(trends);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = app;