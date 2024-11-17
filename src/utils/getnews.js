const request = require('postman-request');

const getNews = (category, callback) => {
    const url = 'http://api.mediastack.com/v1/news?access_key=fc48dacb8752bd57aa9c0166e71c3df6&categories=' + 
        encodeURIComponent(category) + '&countries=id';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Tidak dapat terkoneksi ke layanan berita', undefined);
        } else if (response.body.error) {
            callback('Tidak dapat menemukan berita', undefined);
        } else {
            const articles = response.body.data.map((article) => {
                return {
                    title: article.title,
                    description: article.description,
                    url: article.url
                };
            });

            callback(undefined, articles);
        }
    });
};

module.exports = getNews;
