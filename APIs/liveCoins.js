const { fetch } = require('undici');
const cheerio = require('cheerio');

const url = 'https://www.livecoinwatch.com/';

{/* <tr class="table-row filter-row">
  <td class="filter-item table-item item-name">
    <a class="btn-heart">
      <span class="ft-heart heart-icon"></span>
    </a>
    <small class="abr pt-1">1</small>
  </td>
  <td class="filter-item table-item">
    <a class="text-left" href="/price/Bitcoin-BTC">
      <div class="item-logo-wrap align-items-center">
        <div class="">
          <div class="intersection-visible-wrapper">
            <picture>
              <source srcset="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.webp, https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.webp 2x" type="image/webp">
              <source srcset="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png, https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.png 2x" type="image/png">
              <img class="bordered-img" src="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/32/btc.png" alt="BTC price logo" srcset="https://lcw.nyc3.cdn.digitaloceanspaces.com/production/currencies/64/btc.png 2x" width="30" height="30">
            </picture>
          </div>
        </div>
        <div class="item-name ml10">
          <div class="filter-item-name mb0 text-left">BTC
            <!-- -->&nbsp;
          </div>
          <small class="abr text-truncate">Bitcoin</small>
        </div>
      </div>
    </a>
  </td>
  <td class="filter-item table-item main-price">$
    <!-- -->52253.34
  </td>
  <td class="filter-item table-item price">$1.0259 T</td>
  <td class="filter-item table-item volume price">$19.44 B</td>
  <td class="filter-item table-item">$1.0219 B</td>
  <td class="filter-item table-item ath-col">$68780.77</td>
  <td class="filter-item table-item item-sort fall change-col">
    <span class="percent">0.26%</span>
  </td>
  <td class="filter-item table-item item-sort fall change-col">
    <span class="percent">0.42%</span>
  </td>
  <td class="filter-item table-item chart-wrap price-chart">
    <div class="intersection-visible-wrapper">
      <canvas width="132" height="50" style="width: 132px; height: 50px;"></canvas>
    </div>
  </td>
</tr> */}

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
