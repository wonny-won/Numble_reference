import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 316px;
  border: 1px solid #dddddd;
  display: flex;
  flex-direction: column;
  padding: 18px 19px;
`;
export const Title = styled.input`
  width: 100%;
  height: 18px;
  color: #666666;
  border: 1px solid #dddddd;
  border-radius: 3px;
  font-size: 3px;
`;
export const Contents = styled.input`
  width: 100%;
  height: 248px;
  border: 1px solid #dddddd;
  margin-top: 14px;
  border-radius: 3px;
  font-size: 10px;
  text-align: start;

  :focus {
    outline: none;
  }
`;

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 15px;
`;

export const CreateBtn = styled.button`
  width: 70px;
  height: 23px;
  border: 1px solid #666666;
  background-color: #d9d9d9;
  font-size: 12px;
  color: #ffffff;
  margin-right: 28px;
  cursor: pointer;
`;

export const CancelBtn = styled.button`
  width: 70px;
  height: 23px;
  border: 1px solid #666666;
  background-color: #d9d9d9;
  font-size: 12px;
  color: #ffffff;
  cursor: pointer;
`;
