import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { ChangeEvent, useState } from "react";
import LayoutSubTitle from "../../../commons/layoutSubtitle";
import { FETCH_BOARD } from "../fetchDiary/fetchDiaryPresenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./writeDiaryQueries";
import * as Diary from "./writeDiaryStyles";
import { IMyVariables } from "./writeDiaryTypes";

const WriteDiaryPresenter = () => {
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

  const onChangeContents = (event: ChangeEvent<HTMLInputElement>) => {
    setContents(event.target.value);
  };

  const onClickCreate = async () => {
    try {
      await createBoard({
        variables: {
          writer: "Numble_mento",
          title,
          contents,
        },
      });

      alert("다이어리 등록 성공!");
      router.push("/diary");
    } catch (error) {
      console.log(error);
    }
  };

  const onClickCancel = () => {
    router.push("/diary");
  };

  const onClickUpdate = async () => {
    const myVariables: IMyVariables = {
      number: Number(router.query.diaryId),
      title,
      contents,
    };

    if (title === "") {
      myVariables.title = data?.fetchBoard?.title;
    }
    if (contents === "") {
      myVariables.contents = data?.fetchBoard?.contents;
    }

    try {
      await updateBoard({
        variables: myVariables,
      });
      alert("게시물 수정에 성공했습니다!");
      router.push(`/diary/${router.query.diaryId}`);
    } catch (error) {
      if (error instanceof Error) alert("내용을 확인해주세요");
    }
  };

  return (
    <>
      <LayoutSubTitle mainTitle="Diary" subTitle="" />
      <Diary.Wrapper>
        <Diary.Title
          placeholder=" 제목을 입력해주세요"
          onChange={onChangeTitle}
          defaultValue={data?.fetchBoard?.title}
        />
        <Diary.Contents
          onChange={onChangeContents}
          defaultValue={data?.fetchBoard?.contents}
        />
      </Diary.Wrapper>
      <Diary.Footer>
        <Diary.CreateBtn
          onClick={data?.fetchBoard ? onClickUpdate : onClickCreate}
        >
          {" "}
          {data?.fetchBoard ? "수정하기" : "등록하기"}
        </Diary.CreateBtn>
        <Diary.CancelBtn onClick={onClickCancel}>취소하기</Diary.CancelBtn>
      </Diary.Footer>
    </>
  );
};

export default WriteDiaryPresenter;
