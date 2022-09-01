import LayoutSubTitle from "../../commons/layoutSubtitle";
import * as Styled from "./gmaeStyles";
export default function GamePresenter() {
  return (
    <>
      <Styled.Wrapper>
        <LayoutSubTitle mainTitle="GAME" subTitle="TODAY CHOICE" />
        <Styled.ContainerWrapper>
          <Styled.Container>
            <div>이미지</div>
            <div>끝말잇기</div>
            <div>제시어</div>
            <div>
              <input type="text" /> <button>검색</button>
            </div>
            <div>결과!</div>
          </Styled.Container>
          <Styled.Container>
            <div>이미지</div>
            <div>LOTTO</div>
            <div>버튼을 누르세요</div>
            <div>
              <span>3</span>
              <span>5</span>
              <span>10</span>
              <span>24</span>
              <span>30</span>
              <span>34</span>
            </div>
            <div>
              <button>Button</button>
            </div>
          </Styled.Container>
        </Styled.ContainerWrapper>
      </Styled.Wrapper>
    </>
  );
}
