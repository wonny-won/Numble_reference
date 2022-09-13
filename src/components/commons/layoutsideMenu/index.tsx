import styled from "@emotion/styled";

export interface IPropsLayoutSideMenu {
  src: string;
  title: string;
}

export const MainTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
export const MainTitle = styled.span`
  font-weight: 700;
  font-size: 9px;
  color: #999;
`;
export const MainTitleImage = styled.img`
  width: 10px;
  height: 10px;
  margin-right: 9px;
`;

const LayoutSideMenu = (props: IPropsLayoutSideMenu) => {
  return (
    <MainTitleWrapper>
      <MainTitleImage src={props.src} />
      <MainTitle>{props.title}</MainTitle>
    </MainTitleWrapper>
  );
};
export default LayoutSideMenu;
