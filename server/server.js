require('@google-cloud/debug-agent').start();
import express from 'express';
import Loadable from 'react-loadable';
import indexController from './controllers/index';

const PORT = process.env.PORT || 8080;

const app = express();

app.use(indexController);

Loadable.preloadAll().then(() => {
	app.listen(PORT, (error) => {
		console.log("listening on " + PORT + "...");
	});
});