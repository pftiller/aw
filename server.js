// require('@google-cloud/debug-agent').start();
const express = require("express");
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'build')));

const PORT = process.env.PORT || 3000;


// Loadable.preloadAll().then(() => {
	app.listen(PORT, (error) => {
		console.log("listening on " + PORT + "...");
	});
// });