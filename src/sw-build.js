const workboxBuild = require('workbox-build');
const buildSW = () => {
    return workboxBuild.injectManifest({
            swSrc: 'src/sw-template.js', // this is your sw template file
            swDest: 'build/sw.js', // this will be created in the build step
            globDirectory: 'build',
            globPatterns: [
              '**\/*.{js,css,html,png,jpg}',
            ]
        }).then(({count, size, warnings}) => {
            // Optionally, log any warnings and details.
            warnings.forEach(console.warn);
            console.log(`${count} files will be precached, totaling ${size} bytes.`);
          });
        }
        buildSW();