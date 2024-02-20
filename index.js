(async () => {
    const quotes = await require('./APIs/quotes')();
    console.log(quotes[0], quotes[1]);

    const news = await require('./APIs/news')();
    console.log(news[0], news[1]);
})();