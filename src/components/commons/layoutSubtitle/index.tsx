import styled from "@emotion/styled";

interface IPropsLayoutSubTitle {
  mainTitle: string;
  subTitle: string;
}

const Wrapper = styled.div`
  width: 100%;
  height: 35px;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
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

const LayoutSubTitle = (props: IPropsLayoutSubTitle) => {
  return (
    <Wrapper>
      <MainTitleSpan>{props.mainTitle}</MainTitleSpan>
      <SubTitleSpan>{props.subTitle}</SubTitleSpan>
    </Wrapper>
  );
};

export default LayoutSubTitle;
