const { fetch } = require('undici');
const cheerio = require('cheerio');

const url = 'https://www.livecoinwatch.com/';

async function index() {
    const response = await fetch(url).then(res => res.text());
    const $ = cheerio.load(response);
    const coins = [];

    $('tr').each((i, el) => {
        const sort = $(el).find('.item-name').eq(0).text().trim();
        const name = $(el).find('.item-name').eq(1).text().trim();
        const price = $(el).find('.main-price').text().trim();
        const marketCap = $(el).find('.price').eq(0).text().trim();
        const volume = $(el).find('.price').eq(1).text().trim();
        const liquidity = $(el).find('.filter-item.table-item').eq(4).text().trim();
        const allTimeHigh = $(el).find('.ath-col').text().trim();
        
        if (!name || !price) return;
        coins.push({ sort, name, price, marketCap, volume, liquidity, allTimeHigh });
    });

    return coins;
}

module.exports = index;
