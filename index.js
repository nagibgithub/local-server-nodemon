const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');

const newsData = require('./data/news.json')
const categoryData = require('./data/category.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('this is live local server');
});

app.get('/categories', (req, res) => {
    res.send(categoryData);
});

app.get('/news', (req, res) => {
    res.send(newsData);
});

app.get('/news/:newsId', (req, res) => {
    const id = req.params.newsId
    const idNews = newsData.find(pd => pd._id === id)
    res.send(idNews);
});

app.get('/categories/:categoryId', (req, res) => {
    const id = req.params.categoryId
    if (id == 0) {
        res.send(newsData);
    } else {
        const categoryNews = newsData.filter(pd => pd.category_id === id);
        res.send(categoryNews);
    }
})

app.get('/tranding', (req, res) => {
    const trandingNews = newsData.filter(pd => pd.others_info.is_trending === true)
    res.send(trandingNews)
})

app.get('/todays', (req, res) => {
    const trandingNews = newsData.filter(pd => pd.others_info.is_todays_pick === true)
    res.send(trandingNews)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`);
});