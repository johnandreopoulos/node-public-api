const { fetch } = require('undici');
const cheerio = require('cheerio');

const url = 'https://best-quotations.com/tyxaio.php';

async function index() {
    const response = await fetch(url).then(res => res.text());
    const $ = cheerio.load(response);
    const quotes = [];

    $('.quote').each((i, el) => {
        const quote = $(el).find('b').text();
        const author = $(el).find('.author').text();
        quotes.push({ quote, author });
    });
    
    return quotes[Math.floor(Math.random() * quotes.length)]
}

module.exports = index;