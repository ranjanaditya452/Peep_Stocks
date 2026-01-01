import React from "react";

const NewsCard = ({imgUrl,articleName,articleUrl,articleDescription}) => {
 

  return (
    <div className="w-66 md:w-74 lg:w-92 rounded-lg overflow-hidden border border-neutral-200 bg-white hover:shadow-md transition-shadow">
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
          className="mt-2 text-xs font-medium text-blue-600 hover:underline self-start cursor-pointer"
        >
          Read more →
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
