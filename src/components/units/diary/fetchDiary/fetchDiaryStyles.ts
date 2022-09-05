import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 266px;
  border: 1.5px solid #dddddd;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Date = styled.div`
  width: 100%;
  height: 24px;
  font-size: 11px;
  color: #666666;
  background-color: #dddddd;
  padding: 6px 17px;
`;

export const Title = styled.div`
  color: #666666;
  width: 80%;
  text-align: center;
  overflow: hidden;
  font-size: 12px;
  font-weight: 600;
  margin-top: 27px;
`;

export const Contents = styled.div`
  color: #666666;
  width: 100%;
  height: 133px;
  font-size: 11px;
  font-weight: 500;
  margin-top: 26px;
  padding: 0px 48px;
  overflow: hidden;
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 15px;
`;

export const EditBtn = styled.button`
  width: 70px;
  height: 23px;
  border: 1px solid #666666;
  background-color: #d9d9d9;
  font-size: 12px;
  color: #ffffff;
  margin-right: 28px;
  cursor: pointer;
`;

export const DeleteBtn = styled.button`
  width: 70px;
  height: 23px;
  border: 1px solid #666666;
  background-color: #d9d9d9;
  font-size: 12px;
  color: #ffffff;
  cursor: pointer;
`;

export const ListBtn = styled.div`
  color: #666666;
  font-weight: 500;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
