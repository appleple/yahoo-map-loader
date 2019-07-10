interface YMapLoader {
    endpoint: string;
    Y: typeof Y | null;
    appId: string;
    exportGlobal: boolean;
    load(fn: (ymap: typeof Y) => any): void;
}
declare const yahooMapLoader: YMapLoader;
export default yahooMapLoader;
