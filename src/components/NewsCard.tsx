import { topics } from "./Header";
import { News } from "../redux/newsSlice";
import { Link } from "react-router-dom";
import { randFunc } from "./Home";

export const colors: string[] = [
  "#4B68A1",
  "#479CFF",
  "#FF6D6D",
  "#1EBD71",
  "#B957D2",
  "#FFB72C",
  "#AA2424",
  "#4B47E2",
];

interface NewsCardProps {
  item: News;
  index: number;
  isRowsThree: boolean;
}

export const NewsCard: React.FC<NewsCardProps> = ({
  item,
  index,
  isRowsThree,
}: {
  item: News;
  index: number;
  isRowsThree: boolean;
}) => {
  return (
    <Link
      to={`/news/${item.id}`}
      key={index}
      className={`rounded-3xl shadow-md p-4 flex flex-col cursor-pointer hover:opacity-80 ${
        index % 2 === 0 ? "justify-end" : "justify-around"
      } ${index === 1 && isRowsThree ? "col-span-2 row-span-2" : ""}`}
      style={
        index % 2 === 0
          ? {
              backgroundImage: `url(${item.urlToImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : {}
      }
    >
      {index % 2 !== 0 && (
        <img src={item.urlToImage} className="rounded-3xl " alt="img" />
      )}
      <span
        className={`${
          colors[randFunc(colors)]
        } text-sm text-white px-1 py-2 my-2 rounded-3xl w-[120px] text-center`}
      >
        {item.tag}
      </span>
      <h2
        className={`text-xl font-bold mb-2 ${!item.urlToImage && "#000"} ${
          index % 2 === 0 ? "#fff" : "#000"
        }`}
      >
        {item.title}
      </h2>
      <p
        className={`text-sm font-bold mb-2 ${!item.urlToImage && "#000"} ${
          index % 2 === 0 ? "#fff" : "#000"
        }`}
      >
        {new Date(item.publishedAt).toLocaleString("kz-KZ", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
    </Link>
  );
};
