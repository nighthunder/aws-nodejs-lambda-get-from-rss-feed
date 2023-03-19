import Parser from 'rss-feed'
async function readRSSFeed(url){
    const parser = new Parser()
}

export const handler = async(event) => {
    // TODO implement
    const rssFeed = await readRSSFeed("https://us5.campaign-archive.com/feed?u=49f5ff8910ce85bdb1d9a7864&id=2c187fce9d")
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
