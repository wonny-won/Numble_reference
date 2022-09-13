import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { FETCH_BOARDS } from "../diary/fetchDiaries/fetchDiariesQuery";
import HomePresenter from "./homePresenter";

export default function HomeContainer() {
  const { data } = useQuery(FETCH_BOARDS);
  const datalist = [];
  for (let i = 0; i < 4; i++) {
    datalist.push(data?.fetchBoards[i]);
  }
  const router = useRouter();
  const onClickDataList = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLElement)
      router.push(`/diary/${event.target.id}`);
  };
  return (
    <HomePresenter datalist={datalist} onClickDataList={onClickDataList} />
  );
}
