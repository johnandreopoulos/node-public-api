const { fetch } = require('undici');
const cheerio = require('cheerio');

const url = 'https://news.google.com/home?hl=en-US&gl=US&ceid=US:en';

async function scrapeQuotes() {
    const response = await fetch(url).then(res => res.text());
    const $ = cheerio.load(response);
    const quotes = [];

    $('.quote').each((i, el) => {
        const quote = $(el).find('b').text();
        const author = $(el).find('.author').text();
        quotes.push({ quote, author });
    });
    
    return quotes;
}

module.exports = scrapeQuotes;