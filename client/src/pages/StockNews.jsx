import React, { useContext, useEffect, useState } from 'react'
import CompanyHeader from '../components/CompanyHeader'
import NewsCard from '../components/microcomponents/NewsCard'
import StockContext from '../context/context-creation/StockContext';
import { fetchLatestNews } from '../data-access/StockQuerying';

const StockNews = () => {

  const { symbol } = useContext(StockContext);

  const [newsArticles, setNewsArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!symbol) return;

    setError(null);
    setNewsArticles([]);

    fetchLatestNews(symbol).then(setNewsArticles).catch(err => setError(err.message));
  }, [symbol]);


  return (
    <div className='flex flex-col gap-5
                    px-8 py-8 sm:px-16'>
      <CompanyHeader />
      <h1 className='text-base sm:text-xl md:text-2xl self-center'>NEWS</h1>
      <NewsArea news={newsArticles} error={error} />
    </div>
  )
}

const NewsArea = ({ news, error }) => {

  if (error) return (<p>Error : {error}</p>);

  

  return (
    <div className='grid grid-cols-1 gap-6 justify-items-center
                  sm:grid-cols-2 lg:grid-cols-3'>
      {news.map((article) =><NewsCard key={article.newsURL} newsData={article} />)}
    </div>
  )
}

export default StockNews