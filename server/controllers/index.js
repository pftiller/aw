const express = require("express");
const app = express();
const configureStore = require('../../src/components/store/configureStore');
const api = require('../../src/components/reducer/api');

const router = express.Router();


const actionIndex = (req, res, next) => {
        const store = configureStore.configureStore();

        store.dispatch(api.setAsyncWidth(400))
};

  app.use('/static', express.static('build'));
  router.use('^/$', actionIndex);

