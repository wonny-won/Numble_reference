import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent, useEffect } from "react";
import FetchDiariesPresenter from "./fetchDiariesPresenter";
import { FETCH_BOARDS } from "./fetchDiariesQuery";

export default function FetchDiariesContainer() {
  useEffect(() => {
    refetch({ page: 1 });
  }, []);

  const { data, refetch } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement)
      router.push(`/diary/${event.target.id}`);
  };
  return <FetchDiariesPresenter data={data} onClickDetail={onClickDetail} />;
}
