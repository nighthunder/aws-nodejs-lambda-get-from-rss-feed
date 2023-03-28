"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const rss_parser_1 = __importDefault(require("rss-parser"));
function readRssFeed(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const parser = new rss_parser_1.default();
        const feed = yield parser.parseURL(url);
        const rssFeed = {
            title: feed.title,
            link: feed.link,
            description: feed.description,
            items: feed.items.map((item) => ({
                title: item.title,
                link: item.link,
                content: item.content,
                pubDate: item.pubDate
            })),
        };
        return rssFeed;
    });
}
const handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    // TODO implement
    const rssFeed = yield readRssFeed("https://us5.campaign-archive.com/feed?u=49f5ff8910ce85bdb1d9a7864&id=2c187fce9d");
    const response = {
        statusCode: 200,
        body: JSON.stringify(rssFeed),
    };
    // return response;
    console.log("response", response);
});
exports.handler = handler;
/* (async () => {

   // TODO implement
   const rssFeed = await readRssFeed("https://us5.campaign-archive.com/feed?u=49f5ff8910ce85bdb1d9a7864&id=2c187fce9d")
   const response = {
       statusCode: 200,
       body: JSON.stringify(rssFeed),
   };
   // return response;
   console.log("response", response)
})();
 */
//# sourceMappingURL=index.js.map