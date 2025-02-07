class NewsController {
	// [GET] /news
	index(req, res) {
		res.render('news');
	}

	// [GET] /news/:slug
	show(req, res) {
		res.send('NEWS DETAIL');
	}
}

const newsController = new NewsController();


export default newsController; // Export newsController to use in another file. ( nodejs_blog/src/routes/news.js )
