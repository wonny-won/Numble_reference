import styled from "@emotion/styled";
import { useRouter } from "next/router";

interface IPropsLayoutSubTitle {
  mainTitle: string;
  subTitle: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 35px;
  border-bottom: 1px solid black;
  margin-bottom: 9px;
  line-height: 35px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;
const MainTitleSpan = styled.span`
  color: #55b2d4;
  font-weight: 700;
  font-size: 13px;
  margin-right: 6px;
`;
const SubTitleSpan = styled.span`
  color: black;
  font-weight: 400;
  font-size: 8px;
`;

const WriteDiaryBtn = styled.button`
  width: 75px;
  height: 19px;
  font-size: 10px;
  background-color: #dddddd;
  border: none;
  border-radius: 4px;
  margin-left: auto;
  cursor: pointer;
`;

export const WriteTitle = styled.div`
  color: #55b2d4;
  font-size: 13px;
  font-weight: 700;
`;

const LayoutSubTitle = (props: IPropsLayoutSubTitle) => {
  const router = useRouter();

  const onClickWrite = () => {
    router.push("/diary/new");
  };

  return (
    <Wrapper>
      <MainTitleSpan>{props.mainTitle}</MainTitleSpan>
      <SubTitleSpan>{props.subTitle}</SubTitleSpan>
      {router.asPath === "/diary/new" && <WriteTitle>| 글 등록</WriteTitle>}
      {router.asPath.includes("edit") && <WriteTitle>| 글 수정</WriteTitle>}
      {props.subTitle === "TODAY STORY" && (
        <WriteDiaryBtn onClick={onClickWrite}>다이어리 작성</WriteDiaryBtn>
      )}
    </Wrapper>
  );
};

export default LayoutSubTitle;
