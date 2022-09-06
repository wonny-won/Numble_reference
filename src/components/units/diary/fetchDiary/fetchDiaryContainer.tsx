import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect } from "react";
import FetchDiaryPresenter from "./fetchDiaryPresenter";
import { DELETE_BOARD, FETCH_BOARD } from "./fetchDiaryQueries";

const FetchDiaryContainer = () => {
  useEffect(() => {
    refetch({ number: Number(router.query.diaryId) });
  }, []);
  const router = useRouter();
  const { data, refetch } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.diaryId) },
  });
  const [deleteBoard] = useMutation(DELETE_BOARD);

  const onClickDelete = async () => {
    try {
      await deleteBoard({
        variables: { number: Number(router.query.diaryId) },
      });
      alert("삭제 성공 !");
      router.push("/diary");
    } catch (error) {
      console.log(error);
    }
  };

  const onClickList = () => {
    router.push("/diary");
  };
  const onClickEdit = () => {
    router.push(`/diary/${router.query.diaryId}/edit`);
  };
  return (
    <FetchDiaryPresenter
      data={data}
      onClickDelete={onClickDelete}
      onClickList={onClickList}
      onClickEdit={onClickEdit}
    />
  );
};

export default FetchDiaryContainer;
