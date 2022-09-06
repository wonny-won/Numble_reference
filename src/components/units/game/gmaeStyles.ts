import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
export const ContainerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 11px;
`;
export const Container = styled.div`
  width: 222px;
  height: 165px;
  border: 1px solid #999;
  border-radius: 10px;
  background-color: #f6f6f6;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;
`;
export const GameMainTitle = styled.div`
  font-size: 11px;
  font-weight: 700;
`;
export const GameSubTitle = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: #999;
`;
export const GameInput = styled.input`
  height: 24px;
  background-color: white;
  border: 1px solid #000;
  border-radius: 5px;
  padding-left: 8px;
  color: #555;
  outline: none;
  margin-right: 4px;
  ::placeholder {
    font-size: 11px;
  }
`;
export const GameButton = styled.button`
  height: 24px;
  font-weight: 700;
  font-size: 11px;
  color: #020101;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s;
  :hover {
    background-color: #999;
    color: #eee;
  }
`;
export const GameResult = styled.div`
  font-size: 11px;
  font-weight: 700;
  color: #999;
`;
export const LottoNumberWrapper = styled.div`
  width: 130px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #ffe400;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 0px 7px;
  margin: 3px 0px;
`;
export const LottoNumbers = styled.span`
  font-size: 10px;
  font-weight: 700;
  color: #000;
`;
export const LottoButton = styled.button`
  width: 62px;
  height: 24px;
  color: black;
  font-size: 11px;
  font-weight: 700;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.1s;
  :hover {
    background-color: #999;
    color: #eee;
  }
`;
