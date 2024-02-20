const app = require('express').Router();
const { fetch } = require('undici');
const cheerio = require('cheerio');

const url = 'https://www.netflix.com/tudum/top10/';

{/* <tr data-id="80166314"><td class="pb-2 tbl-cell tbl-cell-rank pt-2">1</td><td class="pb-2 tbl-cell tbl-cell-name pt-2">Despicable Me 3</td><td class="pb-2 tbl-cell tbl-cell-weeks pt-2"><div class="flex items-center justify-center"><div class="w-10 text-center sm:pr-1 sm:text-right whitespace-nowrap"><span class="wk-number">1</span></div><div class="wk-marks-wrap relative hidden min-w-0 wh-full sm:inline-block mt-[2px]"><div class="flex flex-wrap content-center pl-1 text-xs font-bold break-all text-red" style="line-height:0.85;font-size:12px;letter-spacing:.5px"><em><div class="wk-mark"></div></em></div></div></div></td><td class="pb-2 tbl-cell tbl-cell-hours pt-2"><span class="inline-block">23,900,000</span></td><td class="pb-2 tbl-cell tbl-cell-runtime pt-2"><span class="inline-block">1:30</span></td><td class="pb-2 tbl-cell tbl-cell-vhor pt-2"><span class="inline-block">15,900,000</span><div class="hidden w-2/3 h-2 ml-2 text-right rounded-sm md:w-1/5 sm:inline-block" style="background-color:rgba(255, 255, 255, 0.15)"><div class="h-full rounded-sm" style="background-color:rgba(255, 255, 255, 0.6);width:100%"></div></div></td></tr> */}

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