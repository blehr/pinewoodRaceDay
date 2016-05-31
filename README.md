#[PinewoodRaceDay.com](http://pinewoodraceday.com)

Free **Pinewood Derby** and **Raingutter Regatta** program and software, perfect for BSA, Boy Scouts, Cub Scouts, Awana, and Youth Groups.

**This app works with both elapsed-time and points methods of scoring.**

**Works offline, nothing to download or install, no accounts or registration required.**

Instructions for use are located on the [website](http://pinewoodraceday.com).

##Development

* developed using the [webpack-express-boilerplate](https://github.com/christianalfoni/webpack-express-boilerplate)
* react.js
* redux
* react-router
* client-side storage
  * [redux-persist](https://www.npmjs.com/package/redux-persist)
  * [localforage](https://github.com/mozilla/localForage)

##Offline Access

* HTML5 Application Cache allows offline access after first initial page load
* All data is stored on the client utilizing [localforage](https://github.com/mozilla/localForage)

##Deployment

* npm run build compiles to /dist
* Runs completely client-side, can be deployed to a simple apache server
  * htaccess is included to set mime-type text/cache-manifest and redirect all requests to / (client handles routing)
  * place in root of web host directory
