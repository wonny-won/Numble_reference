import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import FetchDiariesPresenter from "./fetchDiariesPresenter";
import { FETCH_BOARDS } from "./fetchDiariesQuery";

export default function FetchDiariesContainer() {
  const { data } = useQuery(FETCH_BOARDS, { fetchPolicy: "network-only" });
  const router = useRouter();

  const onClickDetail = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target instanceof HTMLDivElement)
      router.push(`/diary/${event.target.id}`);
  };
  return <FetchDiariesPresenter data={data} onClickDetail={onClickDetail} />;
}
