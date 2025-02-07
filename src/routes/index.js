import newsRouter from './news.js'; // Import newsRouter from news.js


function routes(app) {
	// Define your routes here
	app.get('/', (req, res) => {
		res.send('Hello World!');
	});
	// ...other routes...
	app.use('/news', newsRouter); // Use routes in news.js
}

export default routes; // Export routes to use in another file. ( nodejs_blog/src/app.js )