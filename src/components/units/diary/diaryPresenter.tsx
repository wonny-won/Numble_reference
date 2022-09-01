import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import LayoutSubTitle from "../../commons/layoutSubtitle";
import * as Diary from "./diaryStyles";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      number
      writer
      title
      contents
      createdAt
    }
  }
`;

export default function DiaryPresenter() {
  const { data } = useQuery(FETCH_BOARDS);
  const router = useRouter();

  const onClickDetail = (event: any) => {
    router.push(`/diary/${event.target.id}`);
  };
  return (
    <Diary.DiaryWrapper>
      <LayoutSubTitle mainTitle="Diary" subTitle="Today diary" />
      {data?.fetchBoards.slice(0, 4).map((el: any, index: any) => (
        <>
          <Diary.Wrapper key={el}>
            <Diary.BoardBox>
              <Diary.BoardDate>{el.createdAt.slice(0, 10)}</Diary.BoardDate>
              <Diary.BoardTitle>제목 : {el.title}</Diary.BoardTitle>
              <Diary.BoardClick id={el.number} onClick={onClickDetail}>
                자세히 보러가기
              </Diary.BoardClick>
            </Diary.BoardBox>
          </Diary.Wrapper>
        </>
      ))}
    </Diary.DiaryWrapper>
  );
}
