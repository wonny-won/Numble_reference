import LayoutSubTitle from "../../../commons/layoutSubtitle";
import * as Diary from "./writeDiaryStyles";
import { IPropsWriteDiaryUI } from "./writeDiaryTypes";

const WriteDiaryPresenter = (props: IPropsWriteDiaryUI) => {
  return (
    <>
      <LayoutSubTitle mainTitle="Diary" subTitle="" />
      <Diary.Wrapper>
        <Diary.Title
          placeholder=" 제목을 입력해주세요"
          onChange={props.onChangeTitle}
          defaultValue={props.data?.fetchBoard?.title || ""}
        />
        <Diary.Contents
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard?.contents || ""}
        />
      </Diary.Wrapper>
      <Diary.Footer>
        <Diary.CreateBtn
          onClick={
            props.data?.fetchBoard ? props.onClickUpdate : props.onClickCreate
          }
        >
          {" "}
          {props.data?.fetchBoard ? "수정하기" : "등록하기"}
        </Diary.CreateBtn>
        <Diary.CancelBtn onClick={props.onClickCancel}>
          취소하기
        </Diary.CancelBtn>
      </Diary.Footer>
    </>
  );
};

export default WriteDiaryPresenter;
