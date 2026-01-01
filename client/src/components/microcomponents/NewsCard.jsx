import React from "react";

const NewsCard = () => {
  const imgUrl =
    "https://media.zenfs.com/en/simply_wall_st__316/13f69b02f49f819df1dcc276114d4a99";
  const articleName =
    "Why Apple Inc. (NASDAQ:AAPL) Could Be Worth Watching";
  const articleDescription =
    "Apple Inc. saw a significant share price rise of over 20% in the past couple of months...";
  const articleUrl =
    "https://finance.yahoo.com/news/why-apple-inc-nasdaq-aapl-110039299.html";

  return (
    <div className="w-66 md:w-74 rounded-lg overflow-hidden border border-neutral-200 bg-white hover:shadow-md transition-shadow">
      <div className="h-40 w-full overflow-hidden">
        <img
          src={imgUrl}
          alt={articleName}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-sm font-semibold leading-snug line-clamp-2">
          {articleName}
        </h3>

        <p className="text-xs text-neutral-600 line-clamp-3">
          {articleDescription}
        </p>

        <a
          href={articleUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-2 text-xs font-medium text-blue-600 hover:underline self-start"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
