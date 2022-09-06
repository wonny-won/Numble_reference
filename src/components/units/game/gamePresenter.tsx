import LayoutSubTitle from "../../commons/layoutSubtitle";
import { IPropsGamePresenter } from "./gameTypes";
import * as Styled from "./gmaeStyles";
import { v4 as uuidv4 } from "uuid";
export default function GamePresenter(props: IPropsGamePresenter) {
  return (
    <>
      <Styled.Wrapper>
        <LayoutSubTitle mainTitle="GAME" subTitle="TODAY CHOICE" />
        <Styled.ContainerWrapper>
          <Styled.Container>
            <img src="images/train.png"></img>
            <Styled.GameMainTitle>끝말잇기</Styled.GameMainTitle>
            <Styled.GameSubTitle>
              제시어 : {props.startWord}
            </Styled.GameSubTitle>
            <div>
              <Styled.GameInput
                ref={props.inputRef}
                type="text"
                placeholder="단어를 입력하세요."
                onChange={props.onChangeWord}
              />
              <Styled.GameButton onClick={props.onClickSearch}>
                입력
              </Styled.GameButton>
            </div>
            <Styled.GameResult>{props.result}</Styled.GameResult>
          </Styled.Container>
          <Styled.Container>
            <img src="images/lotto.png"></img>
            <Styled.GameMainTitle>LOTTO</Styled.GameMainTitle>
            <Styled.GameSubTitle>버튼을 누르세요</Styled.GameSubTitle>
            <Styled.LottoNumberWrapper>
              {props.lottoNumbers.map((el: number) => (
                <Styled.LottoNumbers key={uuidv4()}>{el}</Styled.LottoNumbers>
              ))}
            </Styled.LottoNumberWrapper>
            <div>
              <Styled.LottoButton onClick={props.onClickLotto}>
                Button
              </Styled.LottoButton>
            </div>
          </Styled.Container>
        </Styled.ContainerWrapper>
      </Styled.Wrapper>
    </>
  );
}
