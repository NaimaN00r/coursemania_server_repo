const express=require('express')
const app=express();
const cors=require('cors');
const port=process.env.PORT || 4500;

app.use(cors());

const categories = require('./data/Categories.json');
const news = require('./data/Courses.json');


app.get('/', (req, res) => {
    res.send('Courses is Running');
});

app.get('/course-categories', (req, res) => {
    res.send(categories)
});

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
        const category_news = news.find(n => n.category_id === id);
        res.send(category_news);
})
app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
        const course = news.find(n => n.category_id === id);
        res.send(course);
})

// app.get('/news', (req, res) =>{
//     res.send(news);
// });

// app.get('/news/:id', (req, res) => {
//     const id = req.params.id;
//     const selectedNews = news.find(n => n._id === id);
//     res.send(selectedNews);
// });

app.listen(port, () => {
    console.log('Dragon News Server running on port', port);
})