"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var yahooMapLoader = {
    endpoint: 'https://map.yahooapis.jp/js/V1/jsapi',
    Y: null,
    appId: '',
    exportGlobal: false,
    load: function (fn) {
        if (yahooMapLoader.Y) {
            fn(yahooMapLoader.Y);
        }
        else {
            var script = document.createElement('script');
            script.src = yahooMapLoader.endpoint + "?appId=" + yahooMapLoader.appId;
            script.onload = function () {
                yahooMapLoader.Y = window.Y;
                if (yahooMapLoader.Y) {
                    fn(yahooMapLoader.Y);
                }
                if (!yahooMapLoader.exportGlobal) {
                    window.Y = null;
                }
            };
            document.body.appendChild(script);
        }
    }
};
exports.default = yahooMapLoader;
//# sourceMappingURL=index.js.map