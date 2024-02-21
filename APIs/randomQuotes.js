const app = require('express').Router();
const { fetch } = require('undici');
const cheerio = require('cheerio');

const url = 'https://best-quotations.com/tyxaio.php';

app.get('/randomQuotes', async (req, res) => {
    try {
        const response = await fetch(url).then(res => res.text());
        const $ = cheerio.load(response);
        const quotes = [];

        $('.quote').each((i, el) => {
            const quote = $(el).find('b').text();
            const author = $(el).find('.author').text();
            quotes.push({ quote, author });
        });

        res.json(quotes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = app;