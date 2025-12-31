import React from 'react'

const NewsCard = () => {
    const imgUrl="https://media.zenfs.com/en/simply_wall_st__316/13f69b02f49f819df1dcc276114d4a99";
    const articleName= "Why Apple Inc. (NASDAQ:AAPL) Could Be Worth Watching";
    const articleDescription="Apple Inc. ( NASDAQ:AAPL ) saw a significant share price rise of over 20% in the past couple of months on the NASDAQGS...";
    const articleUrl="https://finance.yahoo.com/news/why-apple-inc-nasdaq-aapl-110039299.html?.tsrc=rss";
    return (
    <div className='h-54
                    rounded-sm bg-cover bg-center' style={{backgroundImage:`url(${imgUrl})`}}>
        <div className=''>{articleName}</div>
        <div>{articleDescription}</div>
        <a href={articleUrl} rel='noreferrer'>Read more</a>
    </div>
  )
}

export default NewsCard