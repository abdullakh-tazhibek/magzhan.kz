import { useSelector } from "react-redux";
import { fetchNews, selectNewsData, setCurrentPage } from "../redux/newsSlice";
import { useAppDispatch } from "../redux/store";
import { NewsCard } from "./NewsCard";
import { useEffect, useState } from "react";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";

export const randFunc = (arr: string[]) => {
  return Math.floor(Math.random() * arr.length);
};

export const Home: React.FC = () => {
  const dispatch = useAppDispatch();

  const { items, currentPage } = useSelector(selectNewsData);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };
  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    onChangePage(page);
  };

  const getNews = async () => {
    dispatch(
      fetchNews({
        currentPage: String(currentPage),
      })
    );
  };

  useEffect(() => {
    getNews();
  }, [currentPage]);

  const news = items.map((obj: any) => <NewsCard key={obj.id} {...obj} />);

  return (
    <div className="bg-[#F6F7F9] m-auto mt-7 px-14">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(150px,_auto)]">
        {news}
      </div>
      <Pagination current={currentPage} onChange={onChange} />
    </div>
  );
};
