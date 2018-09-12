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

// other static resources should just be served as they are
app.use('/static', express.static('build'));

// root (/) should always serve our server rendered page
router.use('^/$', actionIndex);




export default router;