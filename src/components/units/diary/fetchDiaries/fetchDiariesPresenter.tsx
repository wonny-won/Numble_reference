import LayoutSubTitle from "../../../commons/layoutSubtitle";
import { v4 as uuidv4 } from "uuid";
import * as Diary from "./fetchDiariesStyles";
import { IPropsFetchDiaries } from "./fetchDiariesTypes";

export default function FetchDiariesPresenter(props: IPropsFetchDiaries) {
  return (
    <Diary.DiaryWrapper>
      <LayoutSubTitle mainTitle="Diary" subTitle="TODAY STORY" />
      {props.data?.fetchBoards?.slice(0, 4).map((el: any) => (
        <Diary.Wrapper key={uuidv4()}>
          <Diary.BoardBox>
            <Diary.BoardDate>{el.createdAt.slice(0, 10)}</Diary.BoardDate>
            <Diary.BoardTitle>제목 : {el.title}</Diary.BoardTitle>
            <Diary.BoardClick id={el.number} onClick={props.onClickDetail}>
              자세히 보러가기
            </Diary.BoardClick>
          </Diary.BoardBox>
        </Diary.Wrapper>
      ))}
    </Diary.DiaryWrapper>
  );
}
