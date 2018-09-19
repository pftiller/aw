import express from "express";
const app = express();
import serverRenderer from '../middleware/renderer';
import configureStore from '../../src/store/configureStore';
import { setAsyncWidth } from '../../src/reducer/api';

const router = express.Router();
const path = require("path");


const actionIndex = (req, res, next) => {
        const store = configureStore();

        store.dispatch(setAsyncWidth(400))
            .then(() => {
                serverRenderer(store)(req, res, next);
            });
};


app.configure('production', function () {
    app.use (function (req, res, next) {
      var schema = (req.headers['x-forwarded-proto'] || '').toLowerCase();
      if (schema === 'https') {
        next();
      } else {
        res.redirect('https://' + req.headers.host + req.url);
      }
    });
  });
  app.use('/static', express.static('build'));
  router.use('^/$', actionIndex);



export default router;