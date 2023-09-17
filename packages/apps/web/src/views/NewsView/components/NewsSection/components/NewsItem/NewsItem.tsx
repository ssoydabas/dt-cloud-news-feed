import { INewsResultType } from "~api/types";

import { regularTransition, slowTransition } from "~root/styles/transition";
import { toReadableDate } from "~root/services/date";

export interface INewsItemProps {
  article: INewsResultType;
  index: number;
}

export default function NewsItem({
  article: { title, author, publishedAt, description, url, imageUrl },
  index,
}: INewsItemProps) {
  return (
    <div className="flex flex-col pt-8 px-4 border rounded-xl drop-shadow">
      <img
        src={imageUrl}
        alt="Provided media by news channels"
        className={`col-span-1 h-[240px] mx-auto rounded-xl object-contain ${slowTransition} scale-image-up ${
          index === 0 && "hover:translate-y-20 hover:scale-150"
        }`}
      />
      <div className="col-span-4 flex flex-col space-y-8 px-2 py-8">
        <div className="text-2xl">{title}</div>
        <div className="flex justify-between px-4">
          <div className="italic text-lg">By {author}</div>
          <div className="italic">{toReadableDate(publishedAt.toString())}</div>
        </div>
        <div className="px-12 indent-8">{description}</div>

        <a
          className={`mr-auto px-4 py-2 border w-1/4 text-center rounded-xl hover:bg-[#FA6203] hover:text-white hover:translate-x-6 ${regularTransition}`}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More...
        </a>
      </div>
    </div>
  );
}
