import Parser from 'rss-parser'
import RssFeed from './types/rssfeed'
async function readRssFeed(url: string): Promise<RssFeed>{
    const parser = new Parser()
    const feed = await parser.parseURL(url)
    const rssFeed : RssFeed = {
        title: feed.title!,
        link: feed.link!,
        description: feed.description!,
        items: feed.items.map( (item: any) =>({
            title: item.title,
            link: item.link,
            content: item.content,
            pubDate: item.pubDate
        })),
    }    
    return rssFeed
}

export const handler = async(event: any) => {
    // TODO implement
    const rssFeed = await readRssFeed("https://us5.campaign-archive.com/feed?u=49f5ff8910ce85bdb1d9a7864&id=2c187fce9d")
    const response = {
        statusCode: 200,
        body: JSON.stringify(rssFeed),
    };
    // return response;
    console.log("response", response)
};

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
