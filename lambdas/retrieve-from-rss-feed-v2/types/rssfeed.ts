import RssFeedItem from "./rssfeeditem";

interface RssFeed{
    title: string;
    link: string;
    description: string;
    items: RssFeedItem[];
}

export default RssFeed