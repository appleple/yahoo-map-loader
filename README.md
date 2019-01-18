# Yahoo! Map Loader

Just a simple yahoo map loader for Webpack/Browserify

## Install

### via npm

```sh
$ npm install yahoo-map-loader --save
```

### via yarn

```sh
$ yarn add yahoo-map-loader
```

## Use Library

Webpack / Browserify

```js
yahooMapLoader.appId = 'dj0zaiZpPVVCWFI0N3ZUWEJaYyZzPWNvbnN1bWVyc2VjcmV0Jng9ZGM-';
yahooMapLoader.load((Y) => {
  const ymap = new Y.Map("map");
  ymap.drawMap(new Y.LatLng(35.66572, 139.73100), 15, Y.LayerSetId.NORMAL);
});
```