(async () => {
    const quote = await require('./APIs/quotes')();
    console.log(quote);

    const news = await require('./APIs/news')();
    console.log(news);
})();