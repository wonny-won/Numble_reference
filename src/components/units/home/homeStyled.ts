import styled from "@emotion/styled";
import { emotionProps } from "./homeTypes";

export const TitleWrap = styled.div`
  display: flex;
  width: 240px;
  align-items: center;
  padding-bottom: 8px;
  border-bottom: 1.5px solid #999999;
`;
export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #55b2d4;
`;
export const SubTitle = styled.div`
  font-size: 8px;
  margin-left: 20px;
  padding-top: 4px;
`;
export const HomeWrap = styled.div`
  display: flex;
`;
export const DiaryListWrap = styled.div`
  width: 253px;
  padding: 3px;
  font-size: 8px;
  font-weight: 400;
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;
export const Tag = styled.img`
  margin-right: 10px;
  width: 35px;
  height: 14px;
`;
export const MainInfo = styled.div`
  width: 194px;
  height: 60px;
  border-top: dotted 1.5px #999999;
  border-bottom: dotted 1.5px #999999;
  font-size: 8px;
`;
export const LineWrap = styled.div`
  width: 194px;
  display: flex;
  border-bottom: dotted 1.5px #999999;
  justify-content: space-between;
  padding-right: 15px;
`;
export const InfoWrap = styled.div`
  padding: 3px 0;
`;
export const Span = styled.span`
  color: #55b2d4;
  margin-left: 7px;
`;
export const SpecialSpan = styled.span`
  color: #55b2d4;
  margin-left: 7px;
  margin-right: 8px;
`;
export const BGMWrap = styled.div`
  display: flex;
  align-items: center;
  height: 20px;
  margin-top: 10px;
`;
export const BGMTitle = styled.div`
  border-top: 2.5px solid #999999;
  border-bottom: 2.5px solid #999999;
  background-color: #eee;
  margin-top: 10px;
  display: flex;
  align-items: center;
`;
export const BGMItem = styled.div`
  display: flex;
  border-bottom: dotted 1px #999999;
  align-items: center;
`;
export const Span1 = styled.div`
  width: 50px;
  text-align: center;
  font-size: 12px;
  color: ${(props: emotionProps) => (props.isTitle ? "#99999" : "#0F465E")};
  font-weight: ${(props: emotionProps) => props.isTitle && "600"};
`;
export const Span2 = styled.div`
  width: 220px;
  padding-left: 10px;
  color: ${(props: emotionProps) => (props.isTitle ? "#99999" : "#0F465E")};
  font-size: 12px;
  font-weight: ${(props: emotionProps) => props.isTitle && "600"};
`;
export const Span3 = styled.div`
  color: ${(props: emotionProps) => (props.isTitle ? "#99999" : "#0F465E")};
  font-size: 12px;
  font-weight: ${(props: emotionProps) => props.isTitle && "600"};
`;
