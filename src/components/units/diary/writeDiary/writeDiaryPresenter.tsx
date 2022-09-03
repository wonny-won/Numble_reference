import LayoutSubTitle from "../../../commons/layoutSubtitle";
import * as Diary from "./writediaryStyles";

const WriteDiaryPresenter = () => {
  return (
    <>
      <LayoutSubTitle mainTitle="Diary" subTitle="TODAY DIARY" />
      <Diary.Wrapper>
        <Diary.Title placeholder=" 제목을 입력해주세요" />
      </Diary.Wrapper>
    </>
  );
};

export default WriteDiaryPresenter;
