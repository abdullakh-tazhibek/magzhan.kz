import { Pagination, PaginationProps } from "antd";
import { useState } from "react";

type PaginationParams = {
  length: number;
};

export const PaginationPage: React.FC<PaginationParams> = ({ length }) => {
  const totalPage: number = Math.ceil(length / 10);

  const [current, setCurrent] = useState<number>(1);

  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };

  return (
    <div>
      <Pagination current={current} onChange={onChange} total={totalPage} />
    </div>
  );
};
