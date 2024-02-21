const app = require('express').Router();
const { fetch } = require('undici');
const cheerio = require('cheerio');

const url = 'https://news.google.com/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRGx1YlY4U0FtVnVHZ0pWVXlnQVAB?hl=en-US&gl=US&ceid=US%3Aen';

app.get('/googleWordNews', async (req, res) => {
    try {
        const response = await fetch(url).then(res => res.text());
        const $ = cheerio.load(response);
        const news = [];

        $('article').each((i, el) => {
            const title = $(el).find('a').text();
            const source = $(el).find('.vr1PYe').text();
            const time = $(el).find('.hvbAAd').text();
            const author = $(el).find('.bInasb').text();
            const link = "https://news.google.com/" + $(el).find('a').attr('href').slice(2);
            news.push({ title, source, time, author, link });
        });

        res.json(news);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = app;