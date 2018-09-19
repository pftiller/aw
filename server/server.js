require('@google-cloud/debug-agent').start();
import express from 'express';
import Loadable from 'react-loadable';
import indexController from './controllers/index';

const PORT = process.env.PORT || 8080;

const app = express();

// app.use(function(req, res, next){
// 	if (req.host != 'localhost' && req.get('X-Forwarded-Proto') == 'http') {
// 	  res.redirect(`https://${req.host}${req.url}`);
// 	  return;
// 	}
  
// 	app.router(req, res, next);
//   });


app.use(indexController);

Loadable.preloadAll().then(() => {
	app.listen(PORT, (error) => {
		console.log("listening on " + PORT + "...");
	});
});