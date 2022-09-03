import { gql, useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import LayoutSubTitle from "../../../commons/layoutSubtitle";
import * as Diary from "./fetchDiaryStyles";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      writer
      title
      contents
      createdAt
    }
  }
`;

const DELETE_BOARD = gql`
  mutation deleteBoard($number: Int) {
    deleteBoard(number: $number) {
      message
    }
  }
`;

const FetchDiaryPresenter = () => {
  const router = useRouter();
  const { data } = useQuery(FETCH_BOARD, {
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

  return (
    <>
      <LayoutSubTitle mainTitle="Diary" subTitle="" />
      <Diary.Wrapper>
        <Diary.Date>{data?.fetchBoard.createdAt.slice(0, 10)}</Diary.Date>
        <Diary.Title>{data?.fetchBoard.title}</Diary.Title>
        <Diary.Contents>{data?.fetchBoard.contents}</Diary.Contents>
      </Diary.Wrapper>
      <Diary.Footer>
        <Diary.EditBtn>수정하기</Diary.EditBtn>
        <Diary.DeleteBtn onClick={onClickDelete}>삭제하기</Diary.DeleteBtn>
      </Diary.Footer>
    </>
  );
};

export default FetchDiaryPresenter;
