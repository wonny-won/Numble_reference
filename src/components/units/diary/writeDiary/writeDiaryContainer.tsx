import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import { FETCH_BOARD } from "../fetchDiary/fetchDiaryQueries";

import WriteDiaryPresenter from "./writeDiaryPresenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./writeDiaryQueries";
import { IMyVariables } from "./writeDiaryTypes";

const WriteDiaryContainer = () => {
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const router = useRouter();
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.diaryId) },
  });

  const onChangeTitle = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContents = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
  };

  const onClickCreate = async () => {
    if (!title) {
      alert("제목을 입력하세요");
      return;
    }
    if (!contents) {
      alert("내용을 입력하세요");
      return;
    }
    try {
      const result = await createBoard({
        variables: {
          writer: "본인의 이름을 넣어주세요",
          title,
          contents,
        },
      });
      alert("다이어리 등록 성공!");
      router.push(`/diary/${result.data?.createBoard.number}`);
    } catch (error) {
      alert(error);
    }
  };

  const onClickCancel = () => {
    router.push("/diary");
  };

  const onClickUpdate = async () => {
    const variables: IMyVariables = {
      number: Number(router.query.diaryId),
      title,
      contents,
    };

    if (!title) variables.title = data?.fetchBoard?.title;
    if (!contents) variables.contents = data?.fetchBoard?.contents;
    try {
      await updateBoard({
        variables,
      });
      alert("게시물 수정에 성공했습니다!");
      router.push(`/diary/${router.query.diaryId}`);
    } catch (error) {
      if (error instanceof Error) alert("내용을 확인해주세요");
    }
  };

  return (
    <WriteDiaryPresenter
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      onClickCreate={onClickCreate}
      onClickUpdate={onClickUpdate}
      onClickCancel={onClickCancel}
      data={data}
    />
  );
};

export default WriteDiaryContainer;
