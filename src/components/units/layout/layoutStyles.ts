import styled from "@emotion/styled";

export const Wrapper = styled.div`
  background-image: url("/images/cyworldBackground.png");
  width: 1204px;
  height: 600px;
  padding: 20px 0px 0px 20px;
`;
export const InnerWrapper = styled.div`
  background-image: url("/images/cyworldInnerBackground.png");
  width: 808px;
  height: 544px;
  padding: 26px 48px 0px 32px;
`;
export const HeaderWrapper = styled.div`
  width: 100%;
  height: 44px;
  display: flex;
  justify-content: space-between;
`;
export const HeaderLeft = styled.div`
  width: 208px;
  height: 100%;
  color: black;
  font-weight: 400;
  font-size: 9px;
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  padding: 0px 24px 13px 24px;
`;

export const HeaderLeftSpan = styled.span`
  color: red;
`;
export const HeaderCenter = styled.div`
  width: 340px;
  height: 100%;
  color: #55b2d4;
  font-weight: 700;
  font-size: 16px;
  text-align: left;
  line-height: 44px;
`;
export const HeaderRight = styled.div`
  width: 100px;
  height: 100%;
  color: black;
  font-weight: 500;
  font-size: 13px;
  text-align: right;
  line-height: 44px;
`;
export const HeaderRightSpan = styled.span`
  color: #ff6400;
`;

export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const RightBody = styled.div`
  width: 516px;
  height: 435px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
  position: relative;
`;
export const LeftBody = styled.div`
  width: 208px;
  height: 435px;
  background-color: white;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 30px 30px 30px;
`;
export const LeftBodyHeader = styled.div`
  width: 100%;
  height: 145px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8px;
`;
export const HeaderImageBox = styled.div`
  width: 100%;
  height: 133px;
  background-color: #c4c4c4;
  color: black;
  display: flex;
  align-items: center;
  font-size: 16px;
`;
export const HeaderLine = styled.div`
  width: 100%;
  border: 1px dashed #000;
`;

export const LeftBodyMain = styled.div`
  width: 100%;
  height: 175px;
`;

export const LeftBodyFooter = styled.div`
  width: 100%;
`;
export const FooterTitle = styled.div`
  width: 100%;
  font-size: 11px;
  font-weight: 400;
  color: black;
  margin-bottom: 5px;
`;
export const SelectBox = styled.select`
  width: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  color: black;
`;
