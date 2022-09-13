import LayoutSubTitle from "../../../commons/layoutSubtitle";
import * as Diary from "./fetchDiaryStyles";
import { IPropsFetchDiary } from "./fetchDiaryTypes";

const FetchDiaryPresenter = (props: IPropsFetchDiary) => {
  return (
    <>
      <LayoutSubTitle mainTitle="Diary" subTitle="" />
      <Diary.Wrapper>
        <Diary.Date>
          {props.data?.fetchBoard?.createdAt.slice(0, 10)}
        </Diary.Date>
        <Diary.Title>{props.data?.fetchBoard?.title}</Diary.Title>
        <Diary.Contents>{props.data?.fetchBoard?.contents}</Diary.Contents>
      </Diary.Wrapper>
      <Diary.Footer>
        <Diary.EditBtn onClick={props.onClickEdit}>수정하기</Diary.EditBtn>
        <Diary.DeleteBtn onClick={props.onClickDelete}>
          삭제하기
        </Diary.DeleteBtn>
      </Diary.Footer>
      <Diary.ListBtn onClick={props.onClickList}>&lt; 목록으로</Diary.ListBtn>
    </>
  );
};

export default FetchDiaryPresenter;
