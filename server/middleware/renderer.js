import React from 'react'
import ReactDOMServer from 'react-dom/server'
import Loadable from 'react-loadable';
import manifest from '../../build/asset-manifest.json';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router-dom'
import {api} from '../../src/reducer/api';
import App from '../../src/components/templates/Home/App';

const path = require("path");
const fs = require("fs");


// function to extract js assets from the manifest
const extractAssets = (assets, chunks) => Object.keys(assets)
    .filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1)
    .map(k => assets[k]);

export default (store) => (req, res, next) => {
    // get the html file created with the create-react-app build
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.status(404).end()
        }
        // Init empty context necessary for StaticRouter
        const context = {}

        const modules = [];

		// Prepare extra chunks as string of script tags to inject into HTML
		const extraChunks = extractAssets(manifest, modules)
            .map(c => `<script type="text/javascript" src="/${c}"></script>`);
            
        // render the app as a string
        const html = ReactDOMServer.renderToString(
            <Loadable.Capture report={m => modules.push(m)}>
                <Provider store={store}>
                   <Router location={req.baseUrl} context={context}>
						<App />
					</Router>
               </Provider> 
            </Loadable.Capture>
        );

		// Respond with HTML, replace necessary strings
		return res.send(
			htmlData.replace(
				`<div id="root"></div>`,
				`<div id="root">${html}</div>`
			)
			.replace(
				'</body>',
				extraChunks.join('') + '</body>'
		)

		);
	});
}