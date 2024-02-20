const { fetch } = require('undici');
const cheerio = require('cheerio');

async function scrapeQuotes() {
    const url = 'https://best-quotations.com/tyxaio.php';
    const response = await fetch(url).then(res => res.text());
    const $ = cheerio.load(response);
    const quotes = [];
    $('.quote').each((i, el) => {
        // find quote from class quote and the author from class author
        const quote = $(el).find('b').text();
        const author = $(el).find('.author').text();
        quotes.push({ quote, author });
    });
    return quotes;
}

module.exports = scrapeQuotes;