interface YMapLoader {
  endpoint: string,
  Y: typeof Y | null,
  appId: string,
  exportGlobal: boolean,
  load(fn: (ymap: typeof Y) => any): void
}

const yahooMapLoader: YMapLoader = {
  endpoint: 'https://map.yahooapis.jp/js/V1/jsapi',
  Y: null,
  appId: '',
  exportGlobal: false,
  load: (fn) => {
    if (yahooMapLoader.Y) {
      fn(yahooMapLoader.Y);
    } else {
      const script = document.createElement('script');
      script.src = `${yahooMapLoader.endpoint}?appId=${yahooMapLoader.appId}`;
      script.onload = () => {
        yahooMapLoader.Y = window.Y;
        if (yahooMapLoader.Y) {
          fn(yahooMapLoader.Y);
        }
        if (!yahooMapLoader.exportGlobal) {
          window.Y = null;
        }
      }
      document.body.appendChild(script);
    }
  } 
};

export default yahooMapLoader;
