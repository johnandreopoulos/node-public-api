const app = require('express').Router();
const { fetch } = require('undici');
const cheerio = require('cheerio');

const url = 'https://www.netflix.com/tudum/top10/';

app.get('/netflixTop10', async (req, res) => {
    try {
        const response = await fetch(url).then(res => res.text());
        const $ = cheerio.load(response);
        const top10 = [];

        $('tr').each((i, el) => {
            const rank = $(el).find('.tbl-cell-rank').text();
            const name = $(el).find('.tbl-cell-name').text();
            const weeksInTop10 = $(el).find('.tbl-cell-weeks').text();
            const hoursPlayed = $(el).find('.tbl-cell-hours').text();
            const runtime = $(el).find('.tbl-cell-runtime').text();
            const views = $(el).find('.tbl-cell-vhor').text();

            if (!name) return;
            top10.push({ rank, name, weeksInTop10, hoursPlayed, runtime, views });
        });

        res.json(top10);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = app;